import { matcherHint, printReceived, printExpected } from "jest-matcher-utils";
import { toHaveNoViolations as axeMatchers } from "jest-axe";
import matchers, {
  toHaveFocus as _toHaveFocus
} from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/extend-expect";

function toHaveFocus(element) {
  const result = _toHaveFocus.call(this, element);
  const { activeElement } = element.ownerDocument;
  const activeId =
    activeElement && activeElement.getAttribute("aria-activedescendant");
  return {
    ...result,
    pass: result.pass || activeId === element.id,
    message: () => {
      if (activeId) {
        return [
          matcherHint(`${this.isNot ? ".not" : ""}.toHaveFocus`, "element", ""),
          "",
          "Expected:",
          `  ${printExpected(element)}`,
          "Received:",
          `  ${printReceived(element.ownerDocument.getElementById(activeId))}`
        ].join("\n");
      }
      return result.message();
    }
  };
}

expect.extend({ ...matchers, ...axeMatchers, toHaveFocus });
