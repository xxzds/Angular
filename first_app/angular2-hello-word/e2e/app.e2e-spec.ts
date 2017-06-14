import { Angular2HelloWordPage } from './app.po';

describe('angular2-hello-word App', () => {
  let page: Angular2HelloWordPage;

  beforeEach(() => {
    page = new Angular2HelloWordPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
