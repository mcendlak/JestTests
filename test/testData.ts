import CartItem from "../src/CartItem";
import Cart from "../src/Cart";

interface ItestData {
  name: string;
  category: string;
  price: number;
  amount: number;
  itemDiscountRate: number;
}

const testData1: ItestData = {
  name: "artykuł1",
  category: "kategoria1",
  price: 100,
  amount: 1,
  itemDiscountRate: 5,
};

const testItemDataForScenario: ItestData = {
  name: "artykuł99",
  category: "kategoria3",
  price: 190,
  amount: 8,
  itemDiscountRate: 5,
};

// PRODUCTS
const appleData: ItestData = {
  name: "apple",
  category: "fruits",
  price: 2,
  amount: 1,
  itemDiscountRate: 5,
};

const bananaData: ItestData = {
  name: "banana",
  category: "fruits",
  price: 2,
  amount: 1,
  itemDiscountRate: 0,
};

const mangoData: ItestData = {
  name: "mango",
  category: "fruits",
  price: 5,
  amount: 1,
  itemDiscountRate: 10,
};

const waterData: ItestData = {
  name: "water",
  category: "drinks",
  price: 1.5,
  amount: 1,
  itemDiscountRate: 0,
};

const appleJuiceData: ItestData = {
  name: "appleJuice",
  category: "drinks",
  price: 2.5,
  amount: 1,
  itemDiscountRate: 0,
};

const darkBreadData: ItestData = {
  name: "darkBread",
  category: "bread",
  price: 3.5,
  amount: 1,
  itemDiscountRate: 0,
};

const whiteBreadData: ItestData = {
  name: "whiteBread",
  category: "bread",
  price: 2.5,
  amount: 1,
  itemDiscountRate: 10,
};

const createNewCartItem = (data: ItestData) => {
  return new CartItem(
    data.name,
    data.category,
    data.price,
    data.amount,
    data.itemDiscountRate
  );
};

const createNewCart = () => {
  return new Cart();
};

const item1 = new CartItem("artykuł1", "kategoria1", 100, 1, 5);
const item2 = new CartItem("artykuł2", "kategoria1", 25, 1, 0);
const item3 = new CartItem("artykuł3", "kategoria2", 150, 1, 50);
const item4 = new CartItem("artykuł4", "kategoria3", 25, 1, 0);
const arrayOfItems = [item1, item2, item3, item4];

const cart1 = new Cart();

export {
  arrayOfItems,
  cart1,
  testData1,
  createNewCartItem,
  createNewCart,
  testItemDataForScenario,
  ItestData,
  appleData,
  bananaData,
  mangoData,
  waterData,
  appleJuiceData,
  darkBreadData,
  whiteBreadData,
};
