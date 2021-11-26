import { render, screen } from "@testing-library/react";
import {Posts} from ".";

const props = {
    posts: [
        {
            id: 1,
            title: "title 1",
            body: "body 1",
            cover: "/img1"
        },
        {
            id: 2,
            title: "title 2",
            body: "body 2",
            cover: "/img2"
        },
        {
            id: 3,
            title: "title 3",
            body: "body 3",
            cover: "/img3"
        }
    ]
}

describe('<Posts />', () => {
    it('should render posts correctly', () => {
        render(<Posts {...props} />);
        expect(screen.getAllByRole('img', {name: /title/i})).toHaveLength(props.posts.length);
        expect(screen.getAllByRole('heading', {name: /title/i})).toHaveLength(props.posts.length);
        expect(screen.getAllByText(/body/i)).toHaveLength(props.posts.length);
    });

    it('should match snapshot', () => {
        const {container} = render(<Posts {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});