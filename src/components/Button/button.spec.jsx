import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./"

describe ('<button />', () => {
    it('should render the button with text', () => {
        render(<Button text="text test" />);

        const $button = screen.getByRole('button', { name: /text test/i });
        expect($button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="text test" onClick={fn} />);
        const $button = screen.getByRole('button', { name: /text test/i });
        userEvent.click($button);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be desable when disable is true', () => {
        render(<Button text="text test" disabled={true} />);
        const $button = screen.getByRole('button', { name: /text test/i });
        expect($button).toBeDisabled();
    }); 
});