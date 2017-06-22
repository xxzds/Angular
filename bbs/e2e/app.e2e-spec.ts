import { BbsPage } from './app.po';

describe('bbs App', () => {
  let page: BbsPage;

  beforeEach(() => {
    page = new BbsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
