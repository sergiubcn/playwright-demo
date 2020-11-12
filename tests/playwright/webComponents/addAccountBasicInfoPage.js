export default class AddBasicInfoPage {
    constructor(context) {
        this.context = context;
    }

    locators = {
        accountNameTextField: 'input[data-testid=nickname]',
        accountTypeDropDown: '[data-testid=type]',
        nextButton: '[data-testid=add-account-1]',
        typeDropDownOption: type => `//span[text()='${type}']/..`,
    };

    async fillInBasicDataAndProceed({ accountName, accountType}) {
        await this.context.click(this.locators.accountTypeDropDown);
        await this.context.click(this.locators.typeDropDownOption(accountType));
        await this.context.fill(this.locators.accountNameTextField, accountName);
        await this.context.click(this.locators.nextButton);
    }
}
