const { I } = inject();

module.exports = {
  fields: {
    firstNameInput: { css: "#first-name" },
    lastNameInput: { css: "#last-name" },
    postalCodeInput: { css: "#postal-code" },
    continueButton: { css: "#continue" },
  },
  checkInitialElements() {
    I.waitForElement(this.fields.firstNameInput, 2);
    I.waitForElement(this.fields.lastNameInput, 2);
    I.waitForElement(this.fields.postalCodeInput, 2);
    I.waitForElement(this.fields.continueButton, 2);
  },
  clickContinueButton() {
    I.click(this.fields.continueButton);
  },
  setInformation(firstName, lastName, postalCode) {
    I.fillField(this.fields.firstNameInput, firstName);
    I.fillField(this.fields.lastNameInput, lastName);
    I.fillField(this.fields.postalCodeInput, postalCode);
  },
};
