import { test } from "../test-fixtures";
import { OperatePage } from "../pages/OperatePage";

test.beforeEach(async ({page, testSetupPage}) => {
  await page.goto('/');
  await testSetupPage.loginAndNavigateToWebModeler();
  await testSetupPage.createAndDeployUserTaskDiagram();
});


test('Coding Challenge Test', async ({ page }) => {
  const operateTab = await page.waitForEvent('popup');
  const operatePage = new OperatePage(operateTab);

  await operatePage.assertDiagramIsActiveInOperate();
});
