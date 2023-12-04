import { test as base } from "@playwright/test";
import {TestSetupPage } from "./pages/TestSetupPage";

type PlaywrightFixtures = {
  testSetupPage: TestSetupPage;
  overrideTrackingScripts: void;
};

const test = base.extend<PlaywrightFixtures>({
  testSetupPage: async ({ page }, use) => {
    await use(new TestSetupPage(page));
  },
  overrideTrackingScripts: [
    async ({ context }, use) => {
      await context.route(
        "https://cmp.osano.com/16CVvwSNKHi9t1grQ/2ce963c0-31c9-4b54-b052-d66a2a948ccc/osano.js",
        (route) =>
          route.fulfill({
            status: 200,
            headers: {
              "Content-Type": "text/javascript;charset=UTF-8",
            },
            body: "",
          }),
      );
      await use();
    },
    {
      auto: true,
    },
  ],
});
export { test };
