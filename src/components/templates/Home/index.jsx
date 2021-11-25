import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../../utils/load-posts';
import { Posts } from '../../../components/Posts';
import { Button } from '../../Button';
import { SearchBar } from '../../SearchBar';

export class Home extends Component{
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ""
  };

  async componentDidMount(){
    await this.loadPosts();
  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const{
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({searchValue: value});
  }

  render (){
    const { posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? 
    allPosts.filter(posts => {
      return posts.title.toLowerCase().includes(searchValue);
    })
    : posts;
    return (
      <section className="container">

        {!!searchValue && (
          <h1>Search: {searchValue}</h1>
        )}
        <SearchBar
            handleChange={this.handleChange}
            searchValue={searchValue}
        />

        <Posts posts={filteredPosts}/>
        {filteredPosts.length === 0 && (
          <h2>Não existem posts</h2>
        )}
        <div className='button-container'>
          {!searchValue && (
            <Button 
              text="Load More Posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />  
          )}
        </div>
      </section>
      
    );
  }

}
