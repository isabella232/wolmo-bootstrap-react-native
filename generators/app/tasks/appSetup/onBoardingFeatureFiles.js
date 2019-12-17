const { copyFile, copyTemplateFile } = require('../../utils');
const {
  ONBOARDING,
  ONBOARDING_I18N,
  ONBOARDING_FIRST_SCREEN,
  ONBOARDING_FIRST_SCREEN_STYLES,
  ONBOARDING_SECOND_SCREEN,
  ONBOARDING_SECOND_SCREEN_STYLES,
  ONBOARDING_THIRD_SCREEN,
  ONBOARDING_THIRD_SCREEN_STYLES,
  ONBOARDING_SWIPER_SCREEN,
  ONBOARDING_SWIPER_SCREEN_STYLES,
  INITIAL_LOADING_SERVICE
} = require('../../files');

const FILES = [
  ONBOARDING,
  ONBOARDING_I18N,
  ONBOARDING_FIRST_SCREEN,
  ONBOARDING_FIRST_SCREEN_STYLES,
  ONBOARDING_SECOND_SCREEN,
  ONBOARDING_SECOND_SCREEN_STYLES,
  ONBOARDING_THIRD_SCREEN,
  ONBOARDING_THIRD_SCREEN_STYLES,
  ONBOARDING_SWIPER_SCREEN,
  ONBOARDING_SWIPER_SCREEN_STYLES,
  INITIAL_LOADING_SERVICE
];

module.exports = function onBoardingFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
