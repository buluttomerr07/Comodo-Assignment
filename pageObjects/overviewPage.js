const { I } = inject();

module.exports = {
  fields: {
    addedFirstItem: { css: "div.cart_list > div:nth-child(3)" },
    addedFirstItemPrice: {
      css: "div.cart_list > div:nth-child(3) div.inventory_item_price",
    },
    addedSecondItem: { css: "div.cart_list > div:nth-child(4)" },
    addedSecondItemPrice: {
      css: "div.cart_list > div:nth-child(4) div.inventory_item_price",
    },
    subTotalLabel: { css: "div.summary_subtotal_label" },
  },
  checkInitialElements() {
    I.waitForElement(this.fields.addedFirstItem, 2);
    I.waitForElement(this.fields.addedFirstItemPrice, 2);
    I.waitForElement(this.fields.addedSecondItem, 2);
    I.waitForElement(this.fields.addedSecondItemPrice, 2);
    I.waitForElement(this.fields.subTotalLabel, 2);
  },
};
