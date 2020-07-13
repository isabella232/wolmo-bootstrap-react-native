const { copyFile, copyTemplateFile } = require('../utils');
const {
  UTILS_PATH,
  GLOBAL_INTERFACES,
  NAVIGATION_INTERFACES,
  REACTOTRON_INTERFACES,
  REACT_NATIVE_CONFIG,
  JENKINS_FILE,
  DOCKER_FILE,
  CI_CONFIG_FILE,
  PULL_REQUEST_TEMPLATE,
  FONTS,
  API_CONFIG,
  CONFIG,
  MAIN,
  APP_NAVIGATOR_NAVIGATOR,
  CUSTOM_TEXT_PATH,
  CUSTOM_BUTTON_PATH,
  CUSTOM_TEXT_INPUT_PATH,
  LOADABLE_PATH,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  ROUTES_CONSTANTS,
  FONTS_CONSTANTS,
  STATUS_BAR_CONSTANTS,
  FONTS_CONFIG,
  HOOKS_PATH,
  HOME,
  HOME_STYLES,
  README,
  REDUX_STORE,
  REACTOTRON_CONFIG,
  I18N_CONFIG,
  INDEX,
  APP,
  NAVIGATION_CONFIG,
  APP_I18N,
  MOCKS,
  TESTS_STORE,
  TESTS_RESPONSES_PATH,
  TSCONFIG_FILE,
  INDEX_D_FILE,
  ESLINTRC_FILE,
  ESLINT_IGNORE_FILE,
  JEST_CONFIG_FILE,
  NAVIGATION_HELPER,
  APP_NAVIGATOR,
  AUTH_ACTIONS,
  AUTH_REDUCER,
  CUSTOM_STATUS_BAR,
  REDUX_INTERFACES,
  WITH_FORMIK_FIELD_PATH
} = require('../files');

const FILES = [
  UTILS_PATH,
  GLOBAL_INTERFACES,
  NAVIGATION_INTERFACES,
  REACTOTRON_INTERFACES,
  REACT_NATIVE_CONFIG,
  JENKINS_FILE,
  DOCKER_FILE,
  PULL_REQUEST_TEMPLATE,
  FONTS,
  API_CONFIG,
  CONFIG,
  CUSTOM_TEXT_PATH,
  CUSTOM_BUTTON_PATH,
  CUSTOM_TEXT_INPUT_PATH,
  LOADABLE_PATH,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  FONTS_CONSTANTS,
  STATUS_BAR_CONSTANTS,
  I18N_CONFIG,
  FONTS_CONFIG,
  HOOKS_PATH,
  HOME_STYLES,
  MOCKS,
  TESTS_STORE,
  TESTS_RESPONSES_PATH,
  TSCONFIG_FILE,
  ESLINT_IGNORE_FILE,
  JEST_CONFIG_FILE,
  NAVIGATION_HELPER,
  CUSTOM_STATUS_BAR,
  WITH_FORMIK_FIELD_PATH
];

const TEMPLATE_FILES = [
  README,
  REDUX_STORE,
  ROUTES_CONSTANTS,
  REACTOTRON_CONFIG,
  INDEX,
  APP,
  APP_NAVIGATOR,
  APP_NAVIGATOR_NAVIGATOR,
  HOME,
  NAVIGATION_CONFIG,
  APP_I18N,
  CI_CONFIG_FILE,
  MAIN,
  INDEX_D_FILE,
  ESLINTRC_FILE,
  AUTH_ACTIONS,
  AUTH_REDUCER,
  REDUX_INTERFACES
];

module.exports = function baseFilesTemplate() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
