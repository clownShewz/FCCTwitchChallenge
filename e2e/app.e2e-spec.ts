import { FCCTwitchChallengePage } from './app.po';

describe('fcctwitch-challenge App', function() {
  let page: FCCTwitchChallengePage;

  beforeEach(() => {
    page = new FCCTwitchChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
