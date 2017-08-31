import { NgrxFormsSelectIssuePage } from './app.po';

describe('ngrx-forms-select-issue App', () => {
  let page: NgrxFormsSelectIssuePage;

  beforeEach(() => {
    page = new NgrxFormsSelectIssuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
