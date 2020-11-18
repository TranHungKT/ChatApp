import {Dimensions, Platform, NativeModules} from 'react-native';

const {width, height} = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height >= 812 || width >= 812);

const isIphone5 =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 480 || width === 320);

const getLanguage = () => {
  let locale = 'en'; // Default value
  if (Platform.OS === 'ios') {
    locale = NativeModules.SettingsManager.settings.AppleLocale;
  } else if (Platform.OS === 'android') {
    locale = NativeModules.I18nManager.localeIdentifier;
  }
  return locale.slice(0, 2);
};

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
export default {
  isIphoneX,
  ToolbarHeight: isIphoneX ? 35 : 0,
  isIphone5,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  getLanguage,
  isPortrait,
};
