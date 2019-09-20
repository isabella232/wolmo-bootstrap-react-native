const { configureAndroidGoogleServices, configureIosGoogleServices } = require('./configureGoogleServices');

function addConfigToAndroidFiles() {
  let buildGradleContent = this.fs.read(`${this.projectName}/android/build.gradle`);
  buildGradleContent = buildGradleContent.replace(
    'dependencies {',
    "dependencies {\n\t\tclasspath 'com.google.gms:google-services:+'"
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);

  let appBuildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  appBuildGradleContent = appBuildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply plugin: "com.android.application"\napply plugin: \'com.google.gms.google-services\''
  );
  appBuildGradleContent = appBuildGradleContent.replace(
    'if (enableHermes) {',
    "implementation 'com.google.firebase:firebase-core:+'\n\n\tif (enableHermes) {"
  );
  this.fs.write(`${this.projectName}/android/app/build.gradle`, appBuildGradleContent);
  configureAndroidGoogleServices.bind(this)();
}

function addConfigToIosFiles() {
  let AppDelegateContent = this.fs.read(`${this.projectName}/ios/${this.projectName}/AppDelegate.m`);
  AppDelegateContent = AppDelegateContent.replace(
    '#import "AppDelegate.h"',
    '#import "AppDelegate.h"\n\n#import <Firebase.h>'
  );
  AppDelegateContent = AppDelegateContent.replace(
    'didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{',
    'didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n\t[FIRApp configure];'
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}/AppDelegate.m`, AppDelegateContent);
  configureIosGoogleServices.bind(this)();
}

module.exports = function firebaseCoreFeatureFiles() {
  addConfigToAndroidFiles.bind(this)();
  addConfigToIosFiles.bind(this)();
};
