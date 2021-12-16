import Header from './Header';
import {render, screen} from '@testing-library/react';

describe("Header component", () => {

    it("renders without errors", () => {
        //smoke test
        render(<Header />);
    })

})