import { firefox } from 'playwright';
import expect from 'expect';

import LandingPage from './webComponents/landingPage';
import DisclaimerPage from './webComponents/disclaimerPage';
import AddBasicInfoPage from './webComponents/addAccountBasicInfoPage';
import AgreementsPage from './webComponents/agreementsPage';
import AccountFinancialInfoPage from './webComponents/accountFinancialInfoPage';
import { accountItemNamePartialLocator } from './webComponents/accountsListPage';
import USER_DATA from './data/testData';

let browser;
let page;

beforeEach(async () => {
  browser = await firefox.launch({ headless: false });
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
  await browser.close();
});

describe('Add account', () => {
  it('should display the new account on the Accounts List page', async () => {
    const landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
    await landingPage.initiateAddAccountFlow();

    const disclaimerPage = new DisclaimerPage(page);
    await disclaimerPage.acknowledgeDisclaimerAndProceed();

    const addBasicInfoPage = new AddBasicInfoPage(page);
    await addBasicInfoPage.fillInBasicDataAndProceed({ accountName: USER_DATA.accountName, accountType: USER_DATA.accountType });

    const agreementsPage = new AgreementsPage(page);
    await agreementsPage.selectAgreementTypeAndProceed(agreementsPage.AGREEMENT_TYPES.promotion);

    const accountFinancialInfoPage = new AccountFinancialInfoPage(page);
    await accountFinancialInfoPage.fillInFinancialInfoAndSubmit({ 
      interestRate: USER_DATA.interestRate, 
      minPayment: USER_DATA.minimumPayment, 
      statementBalance: USER_DATA.statementBalance 
    });

    const newAccount = await page.innerText(accountItemNamePartialLocator());
    expect(newAccount).toEqual(USER_DATA.accountName);
  });
});
