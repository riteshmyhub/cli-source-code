import { render, screen } from "@testing-library/react";
import PlaceHolder from "./PlaceHolder";

describe("PlaceHolder", () => {
   it("check PlaceHolder component props", () => {
      render(<PlaceHolder title="iron man" color="red" />);
      expect(
         screen.getByRole("paragraph", {
            level: 1,
         })
      ).toHaveTextContent("PlaceHolder component work!");
   });
});
