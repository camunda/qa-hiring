# Camunda QA Engineer Manual Remote Test Challenge

Welcome to the Camunda QA Engineer Remote Test Challenge. For this exercise you have to test a new feature in our process monitoring application [Operate](https://docs.camunda.io/docs/components/operate/) which is part of the [Camunda Cloud](https://docs.camunda.io/).  

Before we can monitor a process we need to create some data! In the following steps you will learn how to deploy a process, start a process instance and observe the result in the Operate app.   

## Prerequisites

### Sign Up for Camunda

Use the following link to create an account for the Camunda Cloud: https://signup.camunda.com/accounts

### Create a Project

After the first log in you will be redirected to the Web Modeler application. You can ignore the survey and tutorial recommondations in the help center.

## Model a Process

Inside your project you can create a process now. You can make use of the BPMN templates and select the **Quick Start: Microservices** process.

## Deploy the Process 

* Select the correct Zeebe version in the bottom bar (bottom right). Version: 8.4.0-alpha
* Click the **Deplyo** button and confirm the selected cluster. The correct cluster is already pre-selected. 

## Start an Instance

Now, that you have deplyoed a process model you can start as many instances of this process as you want.
* Click the **Run** button
* Add variables to your process instance. [Variables](https://docs.camunda.io/docs/components/concepts/variables/) are part of a process instance and represent the data of the instance. You can pass variables in JSON formate like toe following:
```
{
    "candidateName":"Joe",
    "hiringPosition":"QA Engineer"
}
```
## Observe the Process Instance in Operate

You have started a process instance and you can observe it in [Operate](https://docs.camunda.io/docs/next/components/operate/operate-introduction/). To get to the Operate app you can:
* click on the link that appears at the bottom once you have started a instance
* or you click on the navigation menu in the header bar (top left) and select the Operate app.

Opearte has four views:
1. Dashboard View: A total overview about deployed processes, running instances and their state.
2. Processes View: This view provides and overview of all instances that belong to a process model. The view can be refined using filters, like the variable filter. If you click on the Process Instance Key in the process instance list you can inspect a specific instance in the Process Instance View.
3. Process Instance View: This view gives you insides about a single process instance, including the instance history and the variables attached to the instance.
4. Decisions: This view is out of scope for this challenge and contains information about Decision models.  


## The Test Challenge

We will now ask you to do an acceptance test for the following feature:

---
Title: As an Operate User, I can filter for process instances by process variable

Description: As a user, I want to filter process instances by variables. The variable filter is part of the additional filter section in the filter panel located in the Processes View.

Acceptance Criteria:
- [ ] UI
  - [ ] Variable filter can be selected in the `More filters` dropdown menu
  - [ ] Variable filter can be added and removed in the filter panel. Can be removed with the `Remove Filter` button
  - [ ] Variable filter can be combined with the already eisting filters
  - [ ] Filter works with strings, numbers and JSON variables
  - [ ] Filter works with multiple values 
  - [ ] Filter settings are stored in the URL
  - [ ] Sanity check for filter values. Message is displayed underneath
- [ ] API
  - [ ] An endpoint eixsts with signature `POST /api/process-instances` returning the process instances and a counter with the number of mathcing instances
  - [ ] If no instances are found an empty list is returned

---

### Task

This is your task:

1. Transfer the requirements into detailed, comprehensive and well-structured manual test cases.
2. Could you suggest any improvements for the given requirements in the ticket?
3. If you identify issues or potential improvements, please describe the bug/improvement and provide the steps to reproduce.

Please provide your result as PDF in Greenhouse.

### Hint
In the Process Instance View you have the possiblity to add variables to a process instance. This can be helpful for the test scenario.