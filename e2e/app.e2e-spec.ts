import { CoreUIPage } from './app.po';

describe('core-ui App', function() {
  let page: CoreUIPage;

  beforeEach(() => {
    page = new CoreUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Hello World!');
  });
});
