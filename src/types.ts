const availableStringProperties = ["name", "category"] as const;
type availableStringPropertiesTypes = typeof availableStringProperties[number];

const availableNumberProperties = [
  "price",
  "amount",
  "itemDiscountRate",
] as const;
type availableNumberPropertiesTypes = typeof availableNumberProperties[number];

const allAvailableProperties = [
  ...availableStringProperties,
  ...availableNumberProperties,
];

interface ICartItem {
  name: string;
  category: string;
  price: number;
  amount: number;
  itemDiscountRate: number;
  uuid: string;
  getPriceAfterDiscount(): number;
  modifyStringValue(
    property: availableStringPropertiesTypes,
    newString: string
  ): void;
  modifyNumberValue(
    property: availableNumberPropertiesTypes,
    newNumber: number
  ): void;
}

interface ICart {
  uuid: string;
  items: ICartItem[];
  discountRate: number;
  discountCode: string;
  addCartItem(newItem: ICartItem): void;
  removeCartItem(removedItem: ICartItem): void;
  changeAmountOfProduct(itemToBeModified: ICartItem, newAmount: number): void;
  calculateCartValue(): number;
}

export {
  availableStringProperties,
  availableNumberProperties,
  allAvailableProperties,
  availableStringPropertiesTypes,
  availableNumberPropertiesTypes,
  ICartItem,
  ICart,
};