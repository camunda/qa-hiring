import { test } from "../test-fixtures";
import { OperatePage } from "../pages/OperatePage";

test.beforeEach(async ({page, testSetupPage}) => {
  // Navigate to login page
  await page.goto('/');

  // Login and navigate to Web Modeler
  await testSetupPage.loginAndNavigateToWebModeler();

  // Create a simple service task diagram in Web Modeler, deploy the diagram and click the 'View Process Instance' link
  await testSetupPage.createAndDeployUserTaskDiagram();
});


test('Coding Challenge Test', async ({ page }) => {
  // Handle Page Tabs
  const operateTab = await page.waitForEvent('popup');
  // Create new instance of Operate Page with the Operate Tab
  const operatePage = new OperatePage(operateTab);

  // Assert On Process Instance Page in Operate and that diagram is active
  await operatePage.assertDiagramIsActiveInOperate();

  // Your Test Code begins here. Note, instead of using 'page', you must use 'opearteTab'.
});
