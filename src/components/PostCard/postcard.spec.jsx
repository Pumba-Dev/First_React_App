import { render, screen } from "@testing-library/react";
import { PostCard } from ".";

const postMock = {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    cover: 'img/img.png'
};

describe('<PostCard />', () => {
    it('should render postcard and a image', () => {
        render(<PostCard {...postMock}/>);
        expect(screen.getByRole("img", { name: postMock.title })).toHaveAttribute('src', postMock.cover);
        expect(screen.getByRole("heading", { name: postMock.title })).toBeInTheDocument();
        expect(screen.getByText(postMock.body)).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const {container} = render(<PostCard {...postMock}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
    
});