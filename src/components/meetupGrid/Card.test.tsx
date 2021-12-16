import {render, screen} from '@testing-library/react';
import Card from './Card';

describe("Card component", () => {

    it("renders without errors", () => {
        //smoke test
        render(<Card />);
    })

})