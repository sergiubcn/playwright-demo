const locators = {
    accountItemName: {
        partialLocator: '[data-testid*=accountNickname-]',
        preciseLocator: id => `[data-testid=accountNickname-${id}]`,
    },
};

const accountItemNamePartialLocator = () => locators.accountItemName.partialLocator;

export { accountItemNamePartialLocator };
