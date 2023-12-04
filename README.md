# qa-hiring

## Overview

This simple test suite was created for the purpose of an automated coding challenge given during the QA Hiring Process. The test file can be found in QA-Hiring -> tests -> coding-challenge-test.spec.ts. The test suite setup, which includes logging into the Camunda 8 SaaS environment, creating a simple User Task Diagram and deploying this diagram, is already included in the BeforeEach of the test file. 

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

## Running Tests Locally

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