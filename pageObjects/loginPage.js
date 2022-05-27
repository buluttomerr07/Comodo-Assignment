const { I } = inject();

module.exports = {
  fields: {
    mainLogo: { css: "div.login_logo" },
    usernameInput: { css: "#user-name" },
    passwordInput: { css: "#password" },
    loginButton: { css: "#login-button" },
    containerLogo: { css: "div.bot_column" },
    loginCredentialsWrapper: { css: "div.login_credentials_wrap" },
  },
  checkInitialElements() {
    I.waitForElement(this.fields.mainLogo, 2);
    I.waitForElement(this.fields.usernameInput, 2);
    I.waitForElement(this.fields.passwordInput, 2);
    I.waitForElement(this.fields.loginButton, 2);
    I.waitForElement(this.fields.containerLogo, 2);
    I.waitForElement(this.fields.loginCredentialsWrapper, 2);
  },
  setUserCredentials(username, password) {
    I.fillField(this.fields.usernameInput, username);
    I.fillField(this.fields.passwordInput, password);
  },
  clickLoginButton() {
    I.click(this.fields.loginButton);
  },
};
