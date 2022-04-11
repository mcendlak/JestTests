import Utils from "./utils";
import { arrayOfItems, createNewCart } from "./testData";

describe("cart.ts handles errors correctly", () => {
  it("when removeCartItem tries to remove an item not included in the items list", () => {
    const testCart = createNewCart();
    const [excludedItem, ...restOfItems] = arrayOfItems;
    Utils.fillListWithItems(restOfItems, testCart);

    const expectedError = "Cannot remove an item not included in the list";
    const removeExcludedItem = () => {
      testCart.removeCartItem(excludedItem);
    };

    Utils.testErrorHandling(() => {
      removeExcludedItem();
    }, expectedError);
  });

  it("when changeAmountOfProduct tries to change amount property of an item not included in the list", () => {
    const testCart = createNewCart();
    const [excludedItem, ...restOfItems] = arrayOfItems;
    Utils.fillListWithItems(restOfItems, testCart);

    const expectedError = "Item not found";
    const changeAmountOfExcludedItem = () => {
      testCart.changeAmountOfProduct(excludedItem, 1);
    };

    Utils.testErrorHandling(() => {
      changeAmountOfExcludedItem;
    }, expectedError);
  });
});

describe("cart.ts works properly", () => {
  describe("addCartItem method", () => {
    it("should correctly add given item to the items property if the item is not yet included in the list", () => {
      const testCart = createNewCart();
      const [excludedItem, ...restOfItems] = arrayOfItems;
      Utils.fillListWithItems(restOfItems, testCart);

      testCart.addCartItem(excludedItem);

      const finalListOfItems = testCart.items;
      const isItemInFinalList = Utils.isItemInTheList(
        excludedItem,
        finalListOfItems
      );

      expect(isItemInFinalList).toBe(true);
    });
    it("should add 1 to the items amount property if item is already in the list", () => {
      const testCart = createNewCart();
      Utils.fillListWithItems(arrayOfItems, testCart);
      const [includedItem] = arrayOfItems;
      const initialAmountOfItem = includedItem.amount;

      testCart.addCartItem(includedItem);

      const indexOfItemWithAddedAmount = Utils.findItemIndexInTheList(
        includedItem,
        testCart.items
      );

      const addedItem = testCart.items[indexOfItemWithAddedAmount];
      const finalAmountOfItem = addedItem.amount;
      const wasAmountUpdated = finalAmountOfItem === initialAmountOfItem + 1;

      expect(wasAmountUpdated).toBe(true);
    });
  });
  describe("removeCartItem", () => {
    it("should remove given item from the items list if item is included in the list", () => {
      const testCart = createNewCart();
      Utils.fillListWithItems(arrayOfItems, testCart);
      const [includedItem] = arrayOfItems;

      testCart.removeCartItem(includedItem);

      const finalListOfItems = testCart.items;
      const isItemInFinalList = Utils.isItemInTheList(
        includedItem,
        finalListOfItems
      );

      expect(isItemInFinalList).toBe(false);
    });
  });

  describe("changeAmountOfProduct", () => {
    it("updates items amount property to the new passed number", () => {
      const testCart = createNewCart();
      Utils.fillListWithItems(arrayOfItems, testCart);
      const [includedItem] = arrayOfItems;
      const initialAmountOfItem = includedItem.amount;
      const newAmount = initialAmountOfItem + 3;

      testCart.changeAmountOfProduct(includedItem, newAmount);

      const indexToBeFound = Utils.findItemIndexInTheList(
        includedItem,
        testCart.items
      );
      const actualObjectWithChangedAmount = testCart.items[indexToBeFound];
      const finalAmountOfItem = actualObjectWithChangedAmount.amount;
      const areAmountsEqual = newAmount === finalAmountOfItem;

      expect(areAmountsEqual).toBe(true);
    });
  });

  describe("calculateCartValue", () => {
    const testCart = createNewCart();
    Utils.fillListWithItems(arrayOfItems, testCart);

    const expectedCartValue = Utils.calculateCartValue(testCart);
    const methodResult = testCart.calculateCartValue();
    const areResultsEqual = expectedCartValue === methodResult;

    expect(areResultsEqual).toBe(true);
  });
});
