import { v4 as uuidv4 } from "uuid";

import {
  availableStringPropertiesTypes,
  availableNumberPropertiesTypes,
  ICartItem,
} from "./types";

import Validator from "./validator";

export default class CartItem implements ICartItem {
  name = "";
  category = "";
  price = 0;
  amount = 0;
  itemDiscountRate = 0;
  uuid = uuidv4();

  constructor(
    name: string,
    category: string,
    price: number,
    amount: number,
    itemDiscountRate: number
  ) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.amount = amount;
    this.itemDiscountRate = itemDiscountRate;
  }

  private getDiscountAmount() {
    return (this.price / 100) * this.itemDiscountRate;
  }

  getPriceAfterDiscount() {
    return this.price - this.getDiscountAmount();
  }

  modifyStringValue(
    property: availableStringPropertiesTypes,
    newString: string
  ) {
    Validator.validateString(newString);
    switch (property) {
      case "name":
        this.name = newString;
        break;
      case "category":
        this.category = newString;
        break;
    }
  }

  modifyNumberValue(
    property: availableNumberPropertiesTypes,
    newNumber: number
  ) {
    Validator.isFinite(newNumber);
    switch (property) {
      case "price":
        this.price = newNumber;
        break;
      case "amount":
        this.amount = newNumber;
        break;
      case "itemDiscountRate":
        this.itemDiscountRate = newNumber;
        break;
    }
  }
}