const { copyFile, copyTemplateFile } = require('../../utils');
const {
  JENKINS_FILE,
  DOCKER_FILE,
  CI_CONFIG_FILE,
  PULL_REQUEST_TEMPLATE,
  API_CONFIG,
  CONFIG,
  MAIN,
  APP_NAVIGATOR,
  CUSTOM_TEXT,
  CUSTOM_TEXT_STYLES,
  CUSTOM_BUTTON,
  CUSTOM_BUTTON_STYLES,
  CUSTOM_TEXT_INPUT,
  CUSTOM_TEXT_INPUT_STYLES,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_2X,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_3X,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF_2X,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF_3X,
  CUSTOM_TEXT_INPUT_SHOW_PASSWORD,
  CUSTOM_TEXT_INPUT_SHOW_PASSWORD_STYLES,
  LOADABLE,
  LOADABLE_STYLES,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  ROUTES_CONSTANTS,
  ARRAY_UTILS,
  TEST_ESLINT_CONFIG,
  HOME_STYLES,
  README,
  REDUX_STORE,
  REACTOTRON_CONFIG,
  I18N_CONFIG,
  NAV_UTILS,
  STYLE_UTILS,
  INDEX,
  APP,
  SCREENS,
  NAVIGATION_CONFIG,
  APP_I18N
} = require('../../files');

const FILES = [
  JENKINS_FILE,
  DOCKER_FILE,
  PULL_REQUEST_TEMPLATE,
  API_CONFIG,
  CONFIG,
  MAIN,
  APP_NAVIGATOR,
  CUSTOM_TEXT,
  CUSTOM_TEXT_STYLES,
  CUSTOM_BUTTON,
  CUSTOM_BUTTON_STYLES,
  CUSTOM_TEXT_INPUT,
  CUSTOM_TEXT_INPUT_STYLES,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_2X,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_3X,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF_2X,
  CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF_3X,
  CUSTOM_TEXT_INPUT_SHOW_PASSWORD,
  CUSTOM_TEXT_INPUT_SHOW_PASSWORD_STYLES,
  LOADABLE,
  LOADABLE_STYLES,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  ARRAY_UTILS,
  I18N_CONFIG,
  NAV_UTILS,
  STYLE_UTILS,
  TEST_ESLINT_CONFIG,
  HOME_STYLES
];

const TEMPLATE_FILES = [
  README,
  REDUX_STORE,
  ROUTES_CONSTANTS,
  REACTOTRON_CONFIG,
  INDEX,
  APP,
  SCREENS,
  NAVIGATION_CONFIG,
  APP_I18N,
  CI_CONFIG_FILE
];

module.exports = function baseFilesTemplate() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));

  this.fs.copyTpl(
    this.templatePath('src', 'app', 'screens', 'Home', this.features.login ? 'index.js' : 'layout.ejs'),
    this.destinationPath(this.projectName, 'src', 'app', 'screens', 'Home', 'index.js'),
    {
      projectName: this.projectName,
      features: this.features
    }
  );
};
