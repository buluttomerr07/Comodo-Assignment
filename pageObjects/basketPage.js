const { I } = inject();

module.exports = {
  fields: {
    addedProductFirstRow: { css: "div.cart_list > div:nth-child(3)" },
    addedProductSecondRow: { css: "div.cart_list > div:nth-child(4)" },
    checkoutButton: { css: "#checkout" },
  },
  checkInitialElements() {
    I.waitForElement(this.fields.addedProductFirstRow, 2);
    I.waitForElement(this.fields.addedProductSecondRow, 2);
    I.waitForElement(this.fields.checkoutButton, 2);
  },
  clickCheckoutButton() {
    I.click(this.fields.checkoutButton);
  },
};
