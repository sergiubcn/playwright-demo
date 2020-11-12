export default class AccountFinancialInfoPage {    
    constructor(context) {
        this.context = context;
    }

    locators = {
        interestRateTextField: 'input[data-testid=interestRate]',
        minPaymentTextField: '[data-testid=minMonthlyPayment]',
        statementBalanceTextField: '[data-testid=statementBalance]',
        submitButton: '[data-testid=add-account-3]',
    };

    async fillInFinancialInfoAndSubmit({ interestRate, minPayment, statementBalance }) {
        await this.context.fill(this.locators.statementBalanceTextField, statementBalance.toString());
        await this.context.fill(this.locators.minPaymentTextField, minPayment.toString());
        await this.context.fill(this.locators.interestRateTextField, interestRate.toString());
        await this.context.click(this.locators.submitButton);
    }
}
