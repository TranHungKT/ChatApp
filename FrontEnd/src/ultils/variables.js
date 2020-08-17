import {Dimensions, Platform, StyleSheet, PixelRatio} from 'react-native';
import {
  // adjustFontSize,
  // BorderVariable,
  getIphoneXBottomSpace,
  getStatusBarHeight,
} from './mixins';

const IS_IOS = Platform.OS === 'ios';

const platform = Platform.OS;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const isIphoneX = IS_IOS && deviceHeight >= 812 && deviceWidth >= 375;

// export const HAIRLINE_WIDTH: number = StyleSheet.hairlineWidth;

const APP_BAR_HEIGHT = IS_IOS ? 44 : 56;
const APP_NAV_BAR_HEIGHT = IS_IOS ? 44 : 56;
const TITLE_OFFSET = IS_IOS ? 70 : 56;
const STATUS_BAR_HEIGHT = getStatusBarHeight(true);

const fontSizeBase = deviceWidth > 340 ? 16 : 14;
const textColor = 'white';
const inverseTextColor = 'black';

const adjustFontSize = (size) => size;

const BorderVariable = {
  size: {
    normal: StyleSheet.hairlineWidth,
    bold: PixelRatio.roundToNearestPixel(2 * StyleSheet.hairlineWidth),
    heavy: PixelRatio.roundToNearestPixel(3 * StyleSheet.hairlineWidth),
  },
  color: {
    normal: 'rgba(0,0,0,0.1)',
    light: 'rgba(0,0,0,0.08)',
    dark: 'rgba(0,0,0,0.16)',
    darker: 'rgba(0,0,0,0.2)',
  },
};

export const FIX_IPHONE_X_BOTTOM_SPACE = getIphoneXBottomSpace();

export const adjustToEm = (size) => size * fontSizeBase;

//based on iphone 5s's scale

export const OverlayVariable = {
  backgroundColor: 'rgba(0,0,0,0.2)',
};

export const Timing = {
  animatedDefault: 400,
  animatedFast: 300,
  animatedFaster: 250,
  animatedFastest: 100,
};

export const BorderColor = {
  separate: 'rgba(0,0,0,0.1)',
};

export const BackgroundVariable = {
  light: '#ffffff',
  dark: '#e4ebf3',
};

export const lineScale = 3;

export const paddingBase = 8;
export const paddingHorizontal = paddingBase * 1.5;
export const paddingVertical = paddingBase * 1.5;

const Padding = {
  small: 4,
  base: 8,
  paddingVertical: 12,
  vertical_16: paddingVertical,
  vertical_8: 8,
  vertical_4: 4,
  vertical_2: 2,
  paddingHorizontal: paddingHorizontal,
  horizontal_12: 12,
  horizontal_8: 8,
  horizontal_4: 4,
  horizontal_2: 2,
};

const ColorVariable = {
  // gray
  gray: '#C8C8C8',
  gray_lightest: '#F8F8F8',
  gray_lighter: '#EEEEEE',
  gray_light: '#DCDCDC',
  gray_dark: '#A2A2A2',
  gray_darker: '#555555',
  gray_darkest: '#222222',
  gray_overlay: '#EDEDED',
  // primary
  primary: '#2681D5',
  primary_lightest: '#F3F8FD',
  primary_lighter: '#BBD8F3',
  primary_light: '#4E9AE0',
  primary_dark: '#1E67AA',
  primary_darker: '#1A5A94',
  primary_overlay: '#38BDE9',
  // info
  info: '#6895B5',
  info_lightest: '#FBFCFD',
  info_lighter: '#E0E9F0',
  info_light: '#8AADC6',
  info_dark: '#4D7C9D',
  info_darker: '#456E8C',
  info_overlay: '#9AC8D9',
  // success
  success: '#47C366',
  success_lightest: '#ECF9F0',
  success_lighter: '#CEEFD6',
  success_light: '#6DD086',
  success_dark: '#35A250',
  success_darker: '#2F8F47',
  success_overlay: '#69E097',
  // warning
  warning: '#FFAB00',
  warning_lightest: '#FFE6B3',
  warning_lighter: '#FFBC33',
  warning_light: '#FFAB00',
  warning_dark: '#CC8900',
  warning_darker: '#B37800',
  warning_overlay: '#FFD300',
  // danger
  danger: '#EE5A2B',
  danger_lightest: '#FEF8F6',
  danger_lighter: '#FBDBD0',
  danger_light: '#F27F5A',
  danger_dark: '#D54011',
  danger_darker: '#BD390F',
  danger_overlay: '#F68540',
  white: '#ffffff',
  transparent: 'transparent',
  default: '#2681d5',
};

export const HitSlop = {
  a24: {
    top: 24,
    left: 24,
    width: 24,
    bottom: 24,
  },
  a16: {
    top: paddingHorizontal,
    bottom: paddingHorizontal,
    left: paddingHorizontal,
    right: paddingHorizontal,
  },
  r16_v16: {
    top: paddingHorizontal,
    bottom: paddingHorizontal,
    right: paddingHorizontal,
    left: 4,
  },
  h16_v16: {
    top: paddingHorizontal,
    bottom: paddingHorizontal,
    right: paddingHorizontal,
    left: paddingHorizontal,
  },
  v8: {
    top: paddingBase,
    bottom: paddingBase,
    left: 4,
    right: 4,
  },
  v16: {
    top: paddingHorizontal,
    bottom: paddingHorizontal,
    left: 4,
    right: 4,
  },
  v12: {
    top: paddingVertical,
    bottom: paddingVertical,
    left: 4,
    right: 4,
  },
};

export const TextVariable = {
  lineScale: 1.34,
  middotCharacter: '\u00B7',
  fontSize: {
    size_60: adjustFontSize(fontSizeBase + 44),
    size_50: adjustFontSize(fontSizeBase + 34),
    size_40: adjustFontSize(fontSizeBase + 24),
    size_30: adjustFontSize(fontSizeBase + 14),
    size_26: adjustFontSize(fontSizeBase + 10),
    size_24: adjustFontSize(fontSizeBase + 8),
    xxxxlarge: adjustFontSize(fontSizeBase + 6),
    xxxlarge: adjustFontSize(fontSizeBase + 4),
    xxlarge: adjustFontSize(fontSizeBase + 3),
    xlarge: adjustFontSize(fontSizeBase + 2), //
    large: adjustFontSize(fontSizeBase + 1),
    normal: adjustFontSize(fontSizeBase), // Item View title element font size.
    small: adjustFontSize(fontSizeBase - 1), // Item view summary element font size.
    xsmall: adjustFontSize(fontSizeBase - 2),
    xxsmall: adjustFontSize(fontSizeBase - 3),
    xxxsmall: adjustFontSize(fontSizeBase - 4),
    xxxxsmall: adjustFontSize(fontSizeBase - 5),
    xxxxxsmall: adjustFontSize(fontSizeBase - 6),
  },

  fontWeight: {
    thin: '100', // Thin
    ultralight: '200', // Ultra Light
    light: '300', // Light
    regular: '400', // Regular
    normal: '400',
    medium: '500', // Medium
    semibold: '600', // Semibold
    bold: '700', // Bold
    heavy: '800', // Heavy
    black: '900', // Black
  },
  ...Platform.select({
    android: {
      fontFamily: {
        thin: 'Lato-Thin', // Thin
        ultralight: 'Lato-Light', // Ultra Light
        light: 'Lato-Light', // Light
        regular: 'Lato-Light', // Regular
        normal: 'Lato-Regular',
        medium: 'Lato-Regular', // Medium
        semibold: 'Lato-Regular', // Semibold
        bold: 'Lato-Bold', // Bold
        heavy: 'Lato-Bold', // Heavy
        black: 'Lato-Black', // Black

        '100': 'Lato-Thin',
        '200': 'Lato-Light',
        '300': 'Lato-Light',
        '400': 'Lato-Light',
        '500': 'Lato-Regular',
        '600': 'Lato-Regular',
        '700': 'Lato-Bold',
        '800': 'Lato-Bold',
        '900': 'Lato-Black',
      },
    },
  }),
  color: {
    darker: '#000000',
    dark: '#222222',
    normal: '#555555',
    light: '#a2a2a2',
    lighter: '#C8C8C8',
    white: '#fff',
    link: ColorVariable.primary,
    primary: ColorVariable.primary,
  },
};

export const AVATAR_SCROLL_TOP = 3 / 4;

export const AvatarVariable = {
  size: {
    xxsmall: 28,
    xsmall: 32,
    small: 40,
    normal: 48,
    size60: 60,
    large: 64,
    xlarge: 88,
    xxlarge: 112,
  },
  borderColor: BorderVariable.color.normal,
  borderWidth: BorderVariable.size.normal,
  backgroundColor: ColorVariable.gray_lightest,
};

const List = {
  backgroundColor: '#e4ebf3',
  background: {
    default: 'transparent',
  },
  borderColor: {
    default: '#c9c9c9',
  },
  dividerBackground: {
    default: '#f4f4f4',
  },
  itemPadding: {
    default: IS_IOS ? 10 : 12,
  },
  noteColor: {
    default: '#808080',
  },
  noteFontSize: {
    default: 13,
  },
  btnUnderlayColor: {
    default: '#dddddd',
  },
};
const ListItem = {
  borderBottomWidth: {
    default: 1 / 2,
  },
  borderBottomColor: {
    default: '#c9c9c9',
  },
  background: {
    color: 'white',
  },
  paddingX: {
    default: 16,
  },
  paddingY: {
    default: 13,
  },
};

export const ButtonVariable = {
  marginLeft: {
    large: paddingBase * 2,
    normal: paddingBase * 2,
    small: paddingBase,
    xsmall: paddingBase,
    xxsmall: paddingBase / 2,
  },
  borderRadius: {
    large: 4,
    normal: 4,
    small: 3,
    xsmall: 3,
    xxsmall: 2,
  },
  borderRadiusRound: {
    large: 24,
    normal: 22,
    small: 14,
    xsmall: 12,
    xxsmall: 12,
  },
  paddingHorizontal: {
    large: 12,
    normal: 12,
    small: 12,
    xsmall: 8,
    xxsmall: 8,
  },
  height: {
    large: 48,
    normal: 44,
    small: 32,
    xsmall: 28,
    xxsmall: 24,
  },
  fontSize: {
    large: 17,
    normal: 16,
    small: 14,
    xsmall: 13,
    xxsmall: 12,
  },
  iconSize: {
    xxxlarge: 20,
    large: 16,
    normal: 15,
    small: 14,
    xsmall: 13,
    xxsmall: 12,
  },
  background: {
    ...ColorVariable,
    normal: 'white',
    default: 'transparent',
  },
  borderColor: {
    ...ColorVariable,
    normal: ColorVariable.gray_dark,
    default: ColorVariable.gray_dark,
  },
  color: {
    ...ColorVariable,
    white: ColorVariable.primary,
    default: ColorVariable.gray_darker,
  },
  textColor: {
    default: 'white',
    normal: ColorVariable.gray_darker,
    white: ColorVariable.primary,
  },
};
export const InputVariable = {
  // search symbol here
  // https://unicode-search.net/unicode-namesearch.pl?term=ASTERISK
  requiredText: ' \u002a ',

  checkboxInputUncheckIcon: 'square-o',
  checkboxInputCheckedIcon: 'square-inside-o',

  radioInputUncheckIcon: 'circle-o',
  radioInputCheckedIcon: 'check-circle',

  // label
  /*labelColor: Color(TextVariable.color.normal)
      .fade(0.2)
      .string(),*/
  labelFontSize: TextVariable.fontSize.xsmall,
  labelFontWeight: TextVariable.fontWeight.regular,

  // note
  noteColor: ColorVariable.gray_dark,
  noteFontSize: TextVariable.fontSize.xsmall,
  noteFontWeight: TextVariable.fontWeight.regular,

  // error
  errorColor: ColorVariable.danger,
  errorFontSize: TextVariable.fontSize.xsmall,
  errorFontWeight: TextVariable.fontWeight.regular,

  // border bottom
  borderBottomColor: 'rgba(0,0,0,0.2)',
  borderBottomWidth: 0.5,
  // placeholder
  placeholderTextColor: TextVariable.color.light,
  // background
  backgroundColor: 'white',

  inputPaddingTop: 10,
  inputPaddingBottom: 10,
  inputFontSize: TextVariable.fontSize.normal,
  inputFontWeight: TextVariable.fontWeight.regular,
  inputTextColor: TextVariable.color.dark,
  inputTextColorDisabled: TextVariable.color.light,

  height: 40,
  paddingX: {
    default: 6,
  },
  borderRadius: {
    default: 6,
  },
};

const HeaderVariable = {
  APP_BAR_HEIGHT: APP_BAR_HEIGHT,
  NAV_BAR_HEIGHT: APP_NAV_BAR_HEIGHT,
  STATUS_BAR_HEIGHT: STATUS_BAR_HEIGHT,
  TITLE_OFFSET,
  buttonColor: ColorVariable.primary,
  backgroundColor: '#f9f9f9',
  titleColor: '#555',
  titleFontWeight: TextVariable.fontWeight.semibold,
  titleFontSize: 'xlarge',
  buttonFontSize: 'xlarge',
  buttonFontWeight: 'regular',
  iconSize: 19,
  //border
  borderBottomColor: 'rgba(0,0,0,0.2)',
  borderBottomWidth: StyleSheet.hairlineWidth,
};

export {
  Padding,
  HeaderVariable,
  List,
  ColorVariable,
  ListItem,
  deviceHeight,
  deviceWidth,
  platform,
  isIphoneX,
  textColor,
};
