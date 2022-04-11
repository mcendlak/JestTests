import {
  allAvailableProperties,
  availableStringProperties,
  availableNumberProperties,
} from "../src/types";

import { testData1, createNewCartItem } from "./testData";

describe("cartItem.ts", () => {
  describe("constructor function should correctly create an instance", () => {
    it("when receives proper data", () => {
      const testCartItem = createNewCartItem(testData1);
      const arePropertyValuesIdentical = allAvailableProperties.every(
        (keyName) => {
          return testCartItem[keyName] === testData1[keyName];
        }
      );
      expect(arePropertyValuesIdentical).toBe(true);
    });
  });

  describe("getPriceAfterDiscount method", () => {
    it("should return the difference of getDiscountAmount returned value from the price property value", () => {
      const testCartItem = createNewCartItem(testData1);
      const price = testCartItem.price;

      const getDiscountAmount = (price: number, discountRate: number) => {
        return (price / 100) * discountRate;
      };

      const getDiscountAmountResult = getDiscountAmount(
        testCartItem.price,
        testCartItem.itemDiscountRate
      );

      const expectedResult = price - getDiscountAmountResult;
      const actualResult = testCartItem.getPriceAfterDiscount();
      expect(expectedResult).toBe(actualResult);
    });
  });

  describe("modifyStringValue method", () => {
    it("should modify given property with new given value", () => {
      const testCartItem = createNewCartItem(testData1);
      const availableKeyNames = availableStringProperties;

      const newValues = {
        name: "Brand new item name",
        category: "Brand new category name",
      };

      const result = availableKeyNames.every((keyName) => {
        testCartItem.modifyStringValue(keyName, newValues[keyName]);
        return testCartItem[keyName] === newValues[keyName];
      });
      expect(result).toBe(true);
    });
  });

  describe("modifyNumberValue", () => {
    it("should modify given property with new given value", () => {
      const testCartItem = createNewCartItem(testData1);
      const availableKeyNames = availableNumberProperties;

      const newValues = {
        price: 999,
        amount: 999,
        itemDiscountRate: 99,
      };

      const result = availableKeyNames.every((keyName) => {
        testCartItem.modifyNumberValue(keyName, newValues[keyName]);
        return testCartItem[keyName] === newValues[keyName];
      });
      expect(result).toBe(true);
    });
  });
});
