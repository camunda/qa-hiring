import {Page, Locator, expect} from '@playwright/test';

class TestSetupPage {
  private page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly continueButton: Locator;
  readonly loginButton: Locator;
  readonly loginMessage: Locator;
  readonly passwordHeading: Locator;
  readonly welcomeMessage: Locator;
  readonly modelerLink: Locator;
  readonly camundaComponentsButton: Locator;
  readonly modelerPageBanner: Locator;
  readonly createNewProjectButton: Locator;
  readonly projectNameInput: Locator;
  readonly chooseBpmnTemplateButton: Locator;
  readonly diagramTypeDropdown: Locator;
  readonly bpmnTemplateOption: Locator;
  readonly generalPanel: Locator;
  readonly processIdInput: Locator;
  readonly startEventElement: Locator;
  readonly appendTaskButton: Locator;
  readonly changeTypeButton: Locator;
  readonly serviceTaskOption: Locator;
  readonly appendEndEventButton: Locator;
  readonly startInstanceMainButton: Locator;
  readonly startInstanceSubButton: Locator;
  readonly viewProcessInstanceLink: Locator;
  readonly nameInput: Locator;
  readonly taskDefinition: Locator;
  readonly taskDefinitionInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Email address');
    this.passwordInput = page.getByLabel('Password');
    this.continueButton = page.getByRole('button', {
      name: 'Continue',
      exact: true,
    });
    this.loginMessage = page.getByText('Log in to continue to Camunda.');
    this.passwordHeading = page.getByRole('heading', {
      name: 'Enter Your Password',
    });
    this.loginButton = page.getByRole('button', {
      name: 'Continue',
      exact: true,
    });
    this.welcomeMessage = page.getByText('Welcome to Camunda!').first();
    this.modelerLink = page.getByRole('link', {name: 'Modeler', exact: true});
    this.camundaComponentsButton =  page.getByLabel('Camunda components');
    this.modelerPageBanner = page.getByRole('banner', {
      name: 'Camunda Modeler',
    });
    this.createNewProjectButton = page.getByRole('button', {
      name: 'New project',
    });
    this.projectNameInput = page.locator('[data-test="editable-input"]');
    this.chooseBpmnTemplateButton = page.getByRole('button', {
      name: 'Choose BPMN template',
    });
    this.diagramTypeDropdown = page.locator('[data-test="diagram-dropdown"]');
    this.bpmnTemplateOption = page
      .locator('[data-test="create-bpmn-diagram"]');
    this.generalPanel = page.getByTitle('General').first();
    this.processIdInput = page.getByLabel('ID', {exact: true});
    this.startEventElement = page.locator('[data-element-id="StartEvent_1"]');
    this.appendTaskButton = page.getByTitle('Append Task');
    this.changeTypeButton = page.getByTitle('Change type');
    this.serviceTaskOption = page.getByRole('listitem', { name: 'Service Task' });
    this.appendEndEventButton = page.getByTitle('Append EndEvent');
    this.startInstanceMainButton = page.getByRole('button', {name: 'Run'});
    this.startInstanceSubButton = page
        .getByRole('button', {name: 'Run'})
        .last();
    this.viewProcessInstanceLink = page.getByRole('link', {
        name: 'View process instance',
      });
    this.nameInput = page.getByLabel('Name', {exact: true});
    this.taskDefinitionInput = page.getByLabel('Type');
    this.taskDefinition = page.locator('div').filter({ hasText: /^Task definition$/ }).first();
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async clickContinueButton(): Promise<void> {
    await this.continueButton.click();
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click({timeout: 30000});
  }

  async clickCreateNewProjectButton(): Promise<void> {
    await this.createNewProjectButton.click({timeout: 30000});
  }

  async enterNewProjectName(): Promise<void> {
    await this.projectNameInput.click();
    await this.projectNameInput.fill('Coding Challenge Project');
    await this.projectNameInput.press('Enter');
  }

  async clickChooseBpmnTemplateButton(): Promise<void> {
    await this.chooseBpmnTemplateButton.click();
  }

  async clickDiagramTypeDropdown(): Promise<void> {
    await this.diagramTypeDropdown.click();
  }

  async clickBpmnTemplateOption(): Promise<void> {
    await this.bpmnTemplateOption.click();
  }

  async clickGeneralPropertiesPanel(): Promise<void> {
    await this.generalPanel.click();
  }

  async clickProcessIdInput(): Promise<void> {
    await this.processIdInput.click();
  }

  async fillProcessIdInput(id: string): Promise<void> {
    await this.processIdInput.fill(id);
  }

  async clickStartEventElement(): Promise<void> {
    await this.startEventElement.click();
  }

  async clickAppendTaskButton(): Promise<void> {
    await this.appendTaskButton.click({timeout: 60000});
  }

  async clickChangeTypeButton(): Promise<void> {
    await this.changeTypeButton.click({timeout: 30000});
  }

  async clickServiceTaskOption(): Promise<void> {
    await this.serviceTaskOption.click({timeout: 60000, force: true});
  }

  async clickAppendEndEventButton(): Promise<void> {
    await this.appendEndEventButton.click({timeout: 30000});
  }

  async clickStartInstanceMainButton(): Promise<void> {
    await this.startInstanceMainButton.click({timeout: 30000});
  }

  async clickStartInstanceSubButton(): Promise<void> {
    await this.startInstanceSubButton.click();
  }

  async clickViewProcessInstanceLink(): Promise<void> {
    await this.viewProcessInstanceLink.click({timeout: 90000});
  }

  async clickNameInput(): Promise<void> {
    await this.nameInput.click();
  }

  async fillNamedInput(name: string): Promise<void> {
    await this.nameInput.fill(name);
  }

  async clickTaskDefinition(): Promise<void> {
    await this.taskDefinition.click();
  }

  async clickTaskDefinitionInput(): Promise<void> {
    await this.taskDefinitionInput.click();
  }

  async fillTaskDefinitionInput(name: string): Promise<void> {
    await this.taskDefinitionInput.fill(name);
  }

  async loginAndNavigateToWebModeler(credentials: {username?: string; password?: string} = {}) {
    const {
      username = process.env.C8_USERNAME!,
      password = process.env.C8_PASSWORD!,
    } = credentials;

    await expect(this.usernameInput).toBeVisible({timeout: 120000});
    await this.fillUsername(username);
    await this.clickContinueButton();
    await this.fillPassword(password);
    await expect(this.loginButton).toBeVisible({timeout: 60000});
    await this.clickLoginButton();
    await expect(this.welcomeMessage).toBeVisible({timeout: 60000});
    await this.camundaComponentsButton.click();
    await this.modelerLink.click();
  }

  async createAndDeployUserTaskDiagram(): Promise<void> {
    await expect(this.modelerPageBanner).toBeVisible({
      timeout: 120000,
    });
    await this.clickCreateNewProjectButton();
    await this.enterNewProjectName();
    await this.clickDiagramTypeDropdown();
    await this.clickBpmnTemplateOption();
    await expect(this.generalPanel).toBeVisible({
      timeout: 120000,
    });
    await this.clickGeneralPropertiesPanel();
    await this.clickProcessIdInput();
    await this.fillProcessIdInput('Service_Task_Process');
    await this.clickStartEventElement();
    await this.clickAppendTaskButton();
    await this.clickChangeTypeButton();
    await this.clickServiceTaskOption();
    await this.clickTaskDefinition();
    await this.clickTaskDefinitionInput();
    await this.fillTaskDefinitionInput('Test');
    await this.clickAppendEndEventButton();
    await expect(this.startInstanceMainButton).toBeVisible({
      timeout: 60000,
    });
    await this.clickStartInstanceMainButton();
    await expect(this.page.getByText('Healthy', {exact: true})).toBeVisible({
      timeout: 60000,
    });
    await this.clickStartInstanceSubButton();
    await expect(this.viewProcessInstanceLink).toBeVisible({
      timeout: 120000,
    });
    await this.clickViewProcessInstanceLink();
  }
}
export {TestSetupPage};
