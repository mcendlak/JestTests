import { v4 as uuidv4 } from "uuid";

import { ICartItem, ICart } from "./types";

export default class Cart implements ICart {
  uuid = uuidv4();
  items: ICartItem[] = [];
  discountRate = 0;
  discountCode = "";

  addCartItem(newItem: ICartItem) {
    const matchNewItemWithExistingItem = (item: ICartItem) =>
      item.uuid === newItem.uuid;

    const isItemAlreadyInCart = this.items.some(matchNewItemWithExistingItem);

    if (isItemAlreadyInCart) {
      const itemFromCart: ICartItem = this.items.find(
        matchNewItemWithExistingItem
      )!;
      const newAmount = itemFromCart.amount + newItem.amount;
      itemFromCart.modifyNumberValue("amount", newAmount);
    } else {
      this.items.push(newItem);
    }
  }

  removeCartItem(removedItem: ICartItem) {
    const matchNewItemWithExistingItem = (item: ICartItem) =>
      item.uuid === removedItem.uuid;

    const isItemAlreadyInCart = this.items.some(matchNewItemWithExistingItem);

    if (!isItemAlreadyInCart)
      throw new Error("Cannot remove an item not included in the list");

    const removedItemIndex = this.items.findIndex(matchNewItemWithExistingItem);

    this.items.splice(removedItemIndex, 1);
  }

  changeAmountOfProduct(itemToBeModified: ICartItem, newAmount: number) {
    const matchNewItemWithExistingItem = (item: ICartItem) =>
      item.uuid === itemToBeModified.uuid;

    const existingItemTobeModified = this.items.find(
      matchNewItemWithExistingItem
    );

    if (!existingItemTobeModified) throw new Error("Item not found");

    existingItemTobeModified.modifyNumberValue("amount", newAmount);
  }

  calculateCartValue() {
    const cartValue = this.items.reduce((acc, item) => {
      acc += item.getPriceAfterDiscount() * item.amount;
      return acc;
    }, 0);

    const cartDiscountSum = (cartValue / 100) * this.discountRate;

    const result = cartValue - cartDiscountSum;
    return result;
  }
}
