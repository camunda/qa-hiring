import {Page, expect} from '@playwright/test';

class OperatePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertDiagramIsActiveInOperate(): Promise<void> {
    await expect(this.page.getByTestId('instance-header').getByTestId('ACTIVE-icon')).toBeVisible({
      timeout: 1200000, 
    });
  }
}
export {OperatePage};
