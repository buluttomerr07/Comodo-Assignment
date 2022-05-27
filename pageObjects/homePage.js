const { I } = inject();

module.exports = {
  fields: {
    filterSelectBox: { css: '[data-test="product_sort_container"]' },
    firstProductContainer: {
      css: "div.inventory_list > div.inventory_item:nth-child(1)",
    },
    firstProductAddCardButton: {
      css: "#add-to-cart-sauce-labs-backpack",
    },
    secondProductContainer: {
      css: "div.inventory_list > div.inventory_item:nth-child(2)",
    },
    secondProductAddCardButton: {
      css: "#add-to-cart-sauce-labs-bike-light",
    },
    thirdProductContainer: {
      css: "div.inventory_list > div.inventory_item:nth-child(3)",
    },
    fourthProductContainer: {
      css: "div.inventory_list > div.inventory_item:nth-child(4)",
    },
    fifthProductContainer: {
      css: "div.inventory_list > div.inventory_item:nth-child(5)",
    },
    sixthProductContainer: {
      css: "div.inventory_list > div.inventory_item:nth-child(6)",
    },
    basketButton: { css: "#shopping_cart_container > a" },
  },
  checkInitialElements() {
    I.waitForElement(this.fields.filterSelectBox, 2);
    I.waitForElement(this.fields.firstProductContainer, 2);
    I.waitForElement(this.fields.firstProductAddCardButton, 2);
    I.waitForElement(this.fields.secondProductContainer, 2);
    I.waitForElement(this.fields.secondProductAddCardButton, 2);
    I.waitForElement(this.fields.thirdProductContainer, 2);
    I.waitForElement(this.fields.fourthProductContainer, 2);
    I.waitForElement(this.fields.fifthProductContainer, 2);
    I.waitForElement(this.fields.sixthProductContainer, 2);
    I.waitForElement(this.fields.basketButton, 2);
  },
  clickAddCardButtons() {
    I.click(this.fields.firstProductAddCardButton);
    I.click(this.fields.secondProductAddCardButton);
  },
  clickBasketButton() {
    I.click(this.fields.basketButton);
  },
};
