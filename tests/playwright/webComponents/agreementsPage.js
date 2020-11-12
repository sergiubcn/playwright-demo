export default class AgreementsPage {  
    constructor(context) {
        this.context = context;
    }  

    locators = {
        agreementTypePartialLocator: agreement => `[data-testid=${agreement}]`,
        submitAgreementTypeButton: '[data-testid=add-account-2]',
    };

    // TODO: Add the rest of the types
    AGREEMENT_TYPES = {
        promotion: 'creditorAgreementPROMO_PERIOD',
    };

    async selectAgreementTypeAndProceed(agreementType) {
        await this.context.click(this.locators.agreementTypePartialLocator(agreementType));
        await this.context.click(this.locators.submitAgreementTypeButton);
    }
}
