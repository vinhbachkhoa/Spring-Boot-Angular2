import { AppclientPage } from './app.po';

describe('appclient App', () => {
  let page: AppclientPage;

  beforeEach(() => {
    page = new AppclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
