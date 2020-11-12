export default class LandingPage {
    constructor(context) {
        this.context = context;
    }

    locators = {
        getStartedButton: '[data-testid=getStarted]',
    };

    landingPageUrl = 'http://localhost:3000/debt/'

    async initiateAddAccountFlow() {
        await this.context.click(this.locators.getStartedButton);
    }

    async navigateToLandingPage() {
        await this.context.goto(this.landingPageUrl);
    }
};
