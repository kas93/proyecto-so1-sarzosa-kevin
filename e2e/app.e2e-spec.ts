import { ExcelProyectoPage } from './app.po';

describe('excel-proyecto App', () => {
  let page: ExcelProyectoPage;

  beforeEach(() => {
    page = new ExcelProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
