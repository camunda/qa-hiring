# Camunda QA Engineer Automated Remote Test Challenge

## Overview

This simple test suite was created for the purpose of performing an automated coding challenge given during the QA Hiring Process. The test file can be found in QA-Hiring -> Automated Testing Challenge -> tests -> coding-challenge-test.spec.ts. The test suite setup, which includes logging into the Camunda 8 SaaS environment, creating a simple Service Task Diagram and deploying this diagram, is already included in the BeforeEach of the test file. You simply must add your test code below line 25 of the test file. 

## Prerequisites

Before running the test suite, make sure you have the following prerequisites installed:

- Node.js (with npm)
- A Healthy Cluster on Camunda 8 SaaS Environment 

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/camunda/qa-hiring.git
```

2. Install the dependencies:

```bash
npm install
npx playwright install
```

3. Add Enviornmental Variables:

Create a .env file in the root of the project. Add your login credentials to this file. The .env file should look like this:

```bash
C8_USERNAME=your_camunda_c8_username
C8_PASSWORD=your_camunda_c8_password
```

Note: Make sure to keep the .env file private and do not commit it to version control to keep your credentials secure.

## Running Tests

1. Run Tests in Headless Mode

To run the test suite in headless mode (without a graphical user interface), use the following command:

```bash
npx playwright test
```

2. Run Tests with UI (Interactive Mode)

To run the test suite with the UI (interactive mode), append --ui at the end of the npx playwright test command:

```bash
npx playwright test --ui
```

## The Challenge

Your task is to automate one of the test cases that were manually executed and created during the Manual Testing Challenge. The test case should be coded in the file QA-Hiring -> Automated Testing Challenge -> tests -> coding-challenge-test.spec.ts, starting from line 25. You are required to write automated test code to replicate the steps performed in the manual testing challenge.

### Guidelines

1. **Code Location**: Add your automated test code below line 25 in the coding-challenge-test.spec.ts file.

2. **Replication of Manual Steps**: Ensure that your automated test replicates the steps performed during the manual testing challenge for only one of the test cases. 

3. **Test Suite Setup**: This is provided for you in the BeforeEach section of the test file.

### Prerequisites

Before you begin the challenge, make sure you have fulfilled the prerequisites mentioned in the README.md file.

### Submission

Once you have completed the automation of the test case, submit the updated coding-challenge-test.spec.ts test file as a pdf to Greenhouse or else share your repository with us. Provide a brief summary of your approach, any challenges faced, and any additional improvements or optimizations made to the test code.

Good luck and Happy Testing!