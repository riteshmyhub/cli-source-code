import { render, screen } from "@testing-library/react";
import Placeholder from "./Placeholder";

describe("Placeholder", () => {
   it("is have default test in Placeholder component", () => {
      render(<Placeholder />);
      expect(
         screen.getByRole("paragraph", {
            level: 1,
         })
      ).toHaveTextContent("Placeholder component work!");
   });
});
