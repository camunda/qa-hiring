import { test } from "../test-fixtures";
import { OperatePage } from "../pages/OperatePage";
import {expect} from '@playwright/test';

test.beforeEach(async ({page, testSetupPage}) => {
  // Navigate to login page
  await page.goto('/');

  // Login and navigate to Web Modeler
  await testSetupPage.loginAndNavigateToWebModeler();

  // Create a simple service task diagram in Web Modeler, deploy the diagram and click the 'View Process Instance' link
  await testSetupPage.createAndDeployUserTaskDiagram();
});


test('Example Coding Challenge Test', async ({ page }) => {
  //This test will apply a simple variable filter 

  // Handle Page Tabs
  const operateTab = await page.waitForEvent('popup');

  // Create new instance of Operate Page with the Operate Tab
  const operatePage = new OperatePage(operateTab);

  // Assert On Process Instance Page in Operate and that diagram is active
  await operatePage.assertDiagramIsActiveInOperate();

  // Click Processes Tab
  await operateTab.getByRole('link', { name: 'Processes' }).click();

  // Click 'More Filters' Button
  await operateTab.getByLabel('More Filters').click();

  // Click Variable Filter Option
  await operateTab.getByTestId('optional-filter-menuitem-variable').click();

  // Add Variable Name
  await operateTab.getByTestId('optional-filter-variable-name').click();
  await operateTab.getByTestId('optional-filter-variable-name').fill('test');

  // Add Variable Value
  await operateTab.getByTestId('optional-filter-variable-value').click();
  await operateTab.getByTestId('optional-filter-variable-value').fill('"test"');

  // Assert that there are process instances in the list
  await expect(operateTab.getByText('There are no Instances matching this filter set')).not.toBeVisible();
});

test('Coding Challenge Test', async ({ page }) => {
  // Handle Page Tabs
  const operateTab = await page.waitForEvent('popup');
  // Create new instance of Operate Page with the Operate Tab
  const operatePage = new OperatePage(operateTab);

  // Assert On Process Instance Page in Operate and that diagram is active
  await operatePage.assertDiagramIsActiveInOperate();

  // Your Test Code begins here.
});
