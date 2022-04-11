import { ICart, ICartItem } from "../src/types";

export default class Utils {
  static testErrorHandling = (
    testedMethodCall: Function,
    expectedErrorMessage: string
  ) => {
    try {
      testedMethodCall();
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe(expectedErrorMessage);
      }
    }
  };

  static isItemInTheList = (newItem: ICartItem, list: ICartItem[]) => {
    return list.some((item) => item.uuid === newItem.uuid);
  };

  static findItemIndexInTheList = (
    itemToBeFound: ICartItem,
    listToSearch: ICartItem[]
  ) => {
    return listToSearch.findIndex((item) => item.uuid === itemToBeFound.uuid);
  };

  static fillListWithItems = (array: ICartItem[], cart: ICart) => {
    array.forEach((item) => cart.addCartItem(item));
  };

  static calculateCartValue = (cart: ICart) => {
    const actualCartValue = cart.items.reduce((acc, item) => {
      acc += item.getPriceAfterDiscount() * item.amount;
      return acc;
    }, 0);

    const cartDiscountSum = (actualCartValue / 100) * cart.discountRate;

    return actualCartValue - cartDiscountSum;
  };
}
