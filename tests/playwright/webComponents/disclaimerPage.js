export default class DisclaimerPage {
    constructor(context) {
        this.context = context;
    }

    locators = {
        acknowledgeDisclaimerButton: '[data-testid=proceed-to-add-account-button]',
    };

    async acknowledgeDisclaimerAndProceed() {
        await this.context.click(this.locators.acknowledgeDisclaimerButton);
    }
} 
