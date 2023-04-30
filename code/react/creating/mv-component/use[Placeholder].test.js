import { renderHook } from "@testing-library/react-hooks";
import usePlaceholder from "./usePlaceholder";

describe("usePlaceholder", () => {
   it("should be return text value string", () => {
      const { result } = renderHook(usePlaceholder);
      expect(typeof result.current.text).toBe("string");
   });
});
