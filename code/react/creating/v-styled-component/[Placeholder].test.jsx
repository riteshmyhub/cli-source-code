import { render, screen } from "@testing-library/react";
import Placeholder from "./Placeholder";

describe("Placeholder", () => {
   it("is default text available in component", () => {
      render(<Placeholder />);
      const haveTxtElem = screen.getByText("Placeholder component work!");
      expect(haveTxtElem).toBeInTheDocument();
   });
});
