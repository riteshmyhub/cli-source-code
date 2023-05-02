import { render, screen } from "@testing-library/react";
import Placeholder from "./Placeholder";

describe("Placeholder", () => {
   it("check Placeholder component props", () => {
      render(<Placeholder title="iron man" color="red" />);
      expect(
         screen.getByRole("paragraph", {
            level: 1,
         })
      ).toHaveTextContent("Placeholder component work!");
   });
});
