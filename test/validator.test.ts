import Validator from "../src/validator";
import Utils from "./utils";

describe("validator.ts", () => {
  describe("handles errors correctly", () => {
    it("when validateString receives an invalid string", () => {
      const invalidString = "1";
      const passInvalidString = () => {
        Validator.validateString(invalidString);
      };
      const expectedErrorMessage =
        "Given value must contain at least 2 characters";

      Utils.testErrorHandling(() => {
        passInvalidString();
      }, expectedErrorMessage);
    });
    it("when isFinite receives NaN or Infinity as argument", () => {
      const testedValues = [NaN, Infinity];

      const generateError = (value: number) => {
        return `Given number (${value}) must have a finite value`;
      };

      const passInvalidNumber = (value: number) => {
        Validator.isFinite(value);
      };

      testedValues.forEach((value) => {
        Utils.testErrorHandling(() => {
          passInvalidNumber(value);
        }, generateError(value));
      });
    });
  });
});
