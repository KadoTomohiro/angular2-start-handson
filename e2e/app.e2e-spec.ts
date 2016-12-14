import { Angular2StartHandsonPage } from './app.po';

describe('angular2-start-handson App', function() {
  let page: Angular2StartHandsonPage;

  beforeEach(() => {
    page = new Angular2StartHandsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app sample!');
  });
});
