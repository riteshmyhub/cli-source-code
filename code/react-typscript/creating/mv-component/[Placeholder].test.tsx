import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import Placeholder from "./Placeholder";
import usePlaceholder from "./usePlaceholder";

//::usePlaceholder hook testing
describe("usePlaceholder hook testing", () => {
   it("is usePlaceholder text return string", () => {
      const { result } = renderHook(usePlaceholder);
      expect(typeof result.current.text).toBe("string");
   });
});

//::Placeholder component testing
describe("Placeholder component testing", () => {
   it("is default text available in component", () => {
      render(<Placeholder />);
      const haveTxtElem = screen.getByText("Placeholder component work!");
      expect(haveTxtElem).toBeInTheDocument();
   });
});
