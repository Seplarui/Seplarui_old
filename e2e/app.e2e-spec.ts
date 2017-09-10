import { SeplaruiPage } from './app.po';

describe('seplarui App', function() {
  let page: SeplaruiPage;

  beforeEach(() => {
    page = new SeplaruiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
