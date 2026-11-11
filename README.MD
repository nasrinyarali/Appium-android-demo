# Android Appium Demo

A small Android automation project using Appium, WebdriverIO, and TypeScript.

## What the test checks

The smoke test opens the Android Settings app on an emulator and verifies that it is visible. It passed both locally and in GitHub Actions.

## Run locally

1. Start an Android emulator and run `adb devices` to confirm it is connected. The test currently uses `emulator-5554`.
2. From the project folder, install the dependencies:

 ```bash
 npm ci
 ```

3. Start the Appium server and leave that terminal open:

 ```bash
 npx appium --address 127.0.0.1
 ```

4. In a second terminal, run the test:

 ```bash
 npx tsx settings.test.ts
 ```

Expected output: `PASS: Android Settings opened.`

## GitHub Actions

The [Android Appium Smoke Test workflow](.github/workflows/android-smoke.yml) starts an Android emulator and runs the same test. To see the result, open the **Actions** tab and select the successful run.
- [Successful run #1 — View Summary](https://github.com/nasrinyarali/Appium-android-demo/actions/runs/42972874948)