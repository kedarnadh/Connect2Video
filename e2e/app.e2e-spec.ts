import { Connect2VideoPage } from './app.po';

describe('connect2-video App', function() {
  let page: Connect2VideoPage;

  beforeEach(() => {
    page = new Connect2VideoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
