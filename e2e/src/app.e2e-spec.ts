import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Testes & Angular');
  });

  it('should display increaseComponent when increase clicked', () => {
    page.clickIncreaseButton().then(() => {
      expect(page.getIncreaseComponent).toBeTruthy();
    });
  });

  it('should increase 1 when increaseButton Clicked', () => {
    page.clickIncreaseButton().then(() => {
      page.getIncreaseButton().click().then( () => {
        expect(page.getIncreaseInput().getAttribute('value') ).toEqual('1');
      });
    });
  });

  it('should display ShipsComponent when ships clicked', () => {
    page.clickShipsButton().then(() => {
      expect(page.getShipsComponent).toBeTruthy();
    });
  });
});
