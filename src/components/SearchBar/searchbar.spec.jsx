import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {SearchBar} from "."

describe('<SearchBar />', () => {
    it('should have a value of search', () => {
        const fn = jest.fn();
        render(<SearchBar handleChange={fn} searchValue={'input test'} />);
        const $input = screen.getByPlaceholderText(/type to search/i);
        expect($input.value).toBe('input test');
    });

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<SearchBar handleChange={fn}/>);
        const $input = screen.getByPlaceholderText(/type to search/i);
        const inputValue = 'input test';
        userEvent.type($input, inputValue);
        expect($input.value).toBe(inputValue);
        expect(fn).toHaveBeenCalledTimes(inputValue.length);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render(<SearchBar handleChange={fn} searchValue={'input test'} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});