import {
  createNewCartItem,
  appleData,
  bananaData,
  waterData,
  appleJuiceData,
  darkBreadData,
  whiteBreadData,
} from "./testData";
import Utils from "./utils";
import Cart from "../src/Cart";

describe("cart.ts", () => {
  it("accomplishes given scenario", () => {
    // create new cart
    const myCart = new Cart();
    expect(myCart.items.length).toBe(0);

    const apple = createNewCartItem(appleData);
    myCart.addCartItem(apple);

    const banana = createNewCartItem(bananaData);
    myCart.addCartItem(banana);
    myCart.changeAmountOfProduct(banana, 4);

    // control cart value
    let expectedCartValue = Utils.calculateCartValue(myCart);
    let actualCartValue = myCart.calculateCartValue();
    expect(actualCartValue).toBe(expectedCartValue);

    // remove banana
    myCart.removeCartItem(banana);

    // check if all bananas have been removed
    const wasBananaRemoved = !Utils.isItemInTheList(banana, myCart.items);
    expect(wasBananaRemoved).toBe(true);

    // control cart value
    expectedCartValue = Utils.calculateCartValue(myCart);
    actualCartValue = myCart.calculateCartValue();
    expect(actualCartValue).toBe(expectedCartValue);

    // add 2 dark breads
    const darkBread = createNewCartItem(darkBreadData);
    const darkBreadGivenAmount = 2;
    myCart.addCartItem(darkBread);
    myCart.changeAmountOfProduct(darkBread, darkBreadGivenAmount);

    // control dark bread's amount
    const darkBreadActualAmount = darkBread.amount;
    expect(darkBreadActualAmount).toBe(darkBreadGivenAmount);

    // add 6 waters and 2 juices
    const water = createNewCartItem(waterData);
    const appleJuice = createNewCartItem(appleJuiceData);
    myCart.addCartItem(water);
    myCart.addCartItem(appleJuice);
    myCart.changeAmountOfProduct(water, 6);
    myCart.changeAmountOfProduct(appleJuice, 2);

    // control cart value
    expectedCartValue = Utils.calculateCartValue(myCart);
    actualCartValue = myCart.calculateCartValue();
    expect(actualCartValue).toBe(expectedCartValue);

    // add 4 white breads
    const whiteBread = createNewCartItem(whiteBreadData);
    myCart.addCartItem(whiteBread);
    const whiteBreadGivenAmount = 4;
    myCart.changeAmountOfProduct(whiteBread, whiteBreadGivenAmount);
    const whiteBreadActualAmount = whiteBread.amount;
    expect(whiteBreadActualAmount).toBe(whiteBreadGivenAmount);
  });
});
