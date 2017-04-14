import { BitTradePage } from './app.po';

describe('bit-trade App', () => {
  let page: BitTradePage;

  beforeEach(() => {
    page = new BitTradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
