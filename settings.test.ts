import assert from 'node:assert/strict';
import { remote } from 'webdriverio';

async function main() {
 const driver = await remote({
 hostname: '127.0.0.1',
 port: 4723,
 path: '/',
 capabilities: {
 platformName: 'Android',
 'appium:automationName': 'UiAutomator2',
 'appium:udid': 'emulator-5554',
 },
 });

 try {
 await driver.launchApp({ appId: 'com.android.settings' });
 const settings = await driver.$('(//*[@package="com.android.settings"])[1]');
 await settings.waitForDisplayed({ timeout: 10000 });
 assert.ok(await settings.isDisplayed(), 'Android Settings should be visible');
 console.log('PASS: Android Settings opened.');
 } finally {
 await driver.deleteSession();
 }
}

main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});