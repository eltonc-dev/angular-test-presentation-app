import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.title-box > h1')).getText();
  }

  clickIncreaseButton () {
    return this.getButtonIncrease().click();
  }

  getButtonIncrease() {
    return element(by.css('#increaseBtn'));
  }

  getButtonShips() {
    return element(by.css('#shipsBtn'));
  }

  getIncreaseComponent() {
    return element(by.css('#increaseComponent'));
  }

  getIncreaseButton() {
    return element(by.css('#buttonNumber'));
  }

  getIncreaseInput() {
    return element(by.css('#inputNumber'));
  }

  getShipsComponent() {
    return element(by.css('#shipComponent'));
  }

  clickShipsButton() {
    return element(by.css('#shipsBtn')).click();
  }
}
