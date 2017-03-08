import { StemanalyseFrontendPage } from './app.po';

describe('stemanalyse-frontend App', () => {
  let page: StemanalyseFrontendPage;

  beforeEach(() => {
    page = new StemanalyseFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
