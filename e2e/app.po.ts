import { browser, element, by } from 'protractor';

export class BitTradePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.sass('app-root h1')).getText();
  }
}
