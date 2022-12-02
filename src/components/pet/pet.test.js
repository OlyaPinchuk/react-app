import {render, screen} from "@testing-library/react";
import Pet from "./pet";

test('renders "a pet" text in span', () => {
    render(<Pet/>)
    const spanElement = screen.getByText('a pet');
    expect(spanElement).toBeInTheDocument()
})