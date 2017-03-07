import { CURESPage } from './app.po';

describe('cures App', () => {
  let page: CURESPage;

  beforeEach(() => {
    page = new CURESPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
