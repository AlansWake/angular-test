import { HttpProjectPage } from './app.po';

describe('http-project App', () => {
  let page: HttpProjectPage;

  beforeEach(() => {
    page = new HttpProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
