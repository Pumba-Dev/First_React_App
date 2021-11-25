import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./"

describe ('<button />', () => {
    
    it('should render the button with text', () => {
        render(<Button text="text test" />);
        const $button = screen.getByRole('button', { name: /text test/i });
        expect($button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const mockFunction = jest.fn();
        render(<Button text="text test" onClick={mockFunction} ></Button>);
        const $button = screen.getByRole('button', { name: /text test/i });
        userEvent.click($button);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it('should be desable when disable is true', () => {
        const mockFunction = jest.fn();
        render(<Button text="text test" onClick={mockFunction} disabled={true} />);
        const $button = screen.getByRole('button', { name: /text test/i });
        expect($button).toBeDisabled();
    }); 

    it('should snapshot match', () => {
        const mockFunction = jest.fn();
        const {container} = render(<Button text="text test" onClick={mockFunction} disabled={true} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});