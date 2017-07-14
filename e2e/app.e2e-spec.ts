import { UstimezonePage } from './app.po';

describe('ustimezone App', () => {
  let page: UstimezonePage;

  beforeEach(() => {
    page = new UstimezonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
