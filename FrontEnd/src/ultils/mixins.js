import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {
  ColorVariable,
  paddingBase,
  paddingHorizontal,
  paddingVertical,
  TextVariable,
} from './variables';
const IS_IOS = Platform.OS === 'ios';
export function shouldRenderTabletRightComponents() {
  return Dimensions.get('window').width > 768;
}

export function isIphoneX() {
  const dimension = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimension.height >= 812 || dimension.width === 812)
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
  });
}

export function getScreenHeight({statusBar = false, navBar = false} = {}) {
  const totalHeightWithoutNavBar = Dimensions.get('window').height;
  if (IS_IOS) {
    return totalHeightWithoutNavBar;
  }
  let totalHeight = Dimensions.get('screen').height;
  const statusBarHeight = getStatusBarHeight(true);
  const navBarHeight = totalHeight - totalHeightWithoutNavBar;
  if (!statusBar) {
    totalHeight -= statusBarHeight;
  }
  if (!navBar) {
    totalHeight -= navBarHeight;
  }
  return totalHeight;
}

export function getIphoneXBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export const adjustSize = (size) => size;

export const convert = (input, transformer = (x) => x, ...params) => {
  let output = {};
  for (let x of Object.keys(input)) {
    output[x] = transformer(input[x], ...params);
  }
  return output;
};

export type TextProps = {
  fixSpace: number,
  lineScale: number,
  lineHeight: number,
  fontSize: number,
  fontWeight: string,
  letterSpacing: number,
  color: string,
  tracking: number,
  marginBottom: number,
  textAlign: string,
  textAlignVertical: string,
  paddingTop: number,
  fontStyle: string,
  paddingBottom: number,
  paddingVertical: number,
  paddingHorizontal: number,
  paddingLeft: number,
  paddingRight: number,
};

type RichTextStyle = {
  a: number,
  link: number,
  b: number,
  em: number,
  i: number,
  p: number,
  strong: number,
  default: number,
};

export const normalizeHTMLText = ({
  fontSize,
  defaultColor = 'light',
  boldColor = 'normal',
  linkColor = 'normal',
}): RichTextStyle => {
  return StyleSheet.create({
    blockquote: {
      borderLeftWidth: 4,
      borderLeftColor: ColorVariable.gray_lighter,
      paddingLeft: paddingHorizontal,
      marginTop: paddingVertical,
    },
    a: normalizeText({
      fontSize,
      color: linkColor,
      textDecorationLine: 'none',
    }),
    link: normalizeText({fontSize, fontWeight: 'regular', color: linkColor}),
    b: normalizeText({fontSize, fontWeight: 'semibold', color: boldColor}),
    em: normalizeText({fontStyle: 'italic'}),
    i: normalizeText({
      fontSize,
      fontWeight: 'regular',
      color: defaultColor,
      fontStyle: 'italic',
    }),
    p: normalizeText({
      fontSize,
      fontWeight: 'regular',
      color: defaultColor,
      marginTop: paddingBase,
    }),
    div: normalizeText({
      fontSize,
      fontWeight: 'regular',
      color: defaultColor,
    }),
    strong: normalizeText({
      fontSize,
      fontWeight: 'semibold',
      color: defaultColor,
    }),
    default: normalizeText({
      fontSize,
      fontWeight: 'regular',
      color: defaultColor,
    }),
    text: normalizeText({
      fontSize,
      fontWeight: 'regular',
      color: defaultColor,
    }),
    h1: {fontSize: 26, lineHeight: 26 * 1.34, fontWeight: 'bold'},
    h2: {fontSize: 22, lineHeight: 22 * 1.34, fontWeight: 'bold'},
    h3: {fontSize: 18, lineHeight: 18 * 1.34, fontWeight: 'bold'},
    h4: {fontSize: 16, lineHeight: 16 * 1.34, fontWeight: 'bold'},
    h5: {fontSize: 14, lineHeight: 14 * 1.34, fontWeight: 'bold'},
    h6: {fontSize: 12, lineHeight: 12 * 1.34, fontWeight: 'bold'},
  });
};

export const normalizeRichText = ({
  fontSize,
  defaultColor = 'light',
  boldColor = 'normal',
  linkColor = 'normal',
  lineScale = null,
  lineHeight = null,
  fontWeightBold = 'semibold',
}): RichTextStyle => {
  return StyleSheet.create({
    a: normalizeText({
      fontWeight: fontWeightBold,
      color: linkColor,
      lineScale: null,
    }),
    link: normalizeText({fontWeight: fontWeightBold, color: linkColor}),
    b: normalizeText({fontWeight: fontWeightBold, color: linkColor}),
    em: normalizeText({fontStyle: 'italic'}),
    i: normalizeText({fontStyle: 'italic'}),
    p: {},
    strong: normalizeText({fontWeight: fontWeightBold}),
    default: normalizeText({
      fontSize,
      fontWeight: 'regular',
      color: defaultColor,
      lineScale,
      lineHeight,
    }),
    text: normalizeText({
      fontSize,
      fontWeight: 'regular',
      color: defaultColor,
      lineScale,
      lineHeight,
    }),
  });
};

export const normalizeText = ({
  fontSize,
  fontWeight,
  color,
  tracking,
  fixSpace = 0,
  lineScale,
  writingDirection = 'ltr',
  ...props
}: TextProps) => {
  const textStyle = props;

  if (fontSize) {
    fontSize =
      typeof fontSize === 'string' ? TextVariable.fontSize[fontSize] : fontSize;
    tracking =
      tracking === undefined
        ? fontSize >= 16
          ? -30
          : fontSize > -14
          ? -24
          : 0
        : Number(tracking);
    if (tracking) {
      textStyle.letterSpacing = IS_IOS ? (tracking / 1000) * 16 : 0;
    }
    if (typeof fontSize === 'number') {
      textStyle.fontSize = PixelRatio.roundToNearestPixel(fontSize);
    }
  }

  if (writingDirection) {
    textStyle.writingDirection = writingDirection;
  }

  if (color) {
    textStyle.color = TextVariable.color[color]
      ? TextVariable.color[color]
      : ColorVariable[color]
      ? ColorVariable[color]
      : color;
  }

  if (textStyle.fontSize && !textStyle.lineHeight && lineScale !== null) {
    textStyle.lineHeight = PixelRatio.roundToNearestPixel(
      textStyle.fontSize * (lineScale ? lineScale : TextVariable.lineScale),
    );
  }

  if (fixSpace && textStyle.fontSize) {
    textStyle.paddingVertical = PixelRatio.roundToNearestPixel(
      textStyle.fontSize * fixSpace,
    );
  }

  if (fontWeight) {
    textStyle.fontWeight = TextVariable.fontWeight[fontWeight]
      ? TextVariable.fontWeight[fontWeight]
      : fontWeight;
  }

  if (!IS_IOS) {
    // textStyle.fontWeight = "normal";
    // textStyle.fontFamily = textStyle.fontFamily
    //   ? textStyle.fontFamily
    //   : "Gotham-Light";
    textStyle.fontFamily =
      TextVariable.fontFamily[fontWeight] || textStyle.fontFamily;
  }

  return textStyle;
};

export const hitSlop = (range: number) => ({
  top: range,
  right: range,
  bottom: range,
  left: range,
});

export const adjustFontSize = (size) => size;

export const BorderVariable = {
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

const getBorderColor = (color) => {
  return color
    ? BorderVariable.color[color]
      ? BorderVariable.color[color]
      : color
    : BorderVariable.color.normal;
};

const getBorderSize = (size) => {
  return size
    ? BorderVariable.size[size]
      ? BorderVariable.size[size]
      : size
    : BorderVariable.size.normal;
};

export const StylingHelper = {
  fillRow: () => ({
    flexDirection: 'row',
  }),
  fillRowMiddleAlign: (): Object => ({
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  }),
  fillRounded: (size) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  }),
  fillImageBorder: ({size, color}) => ({
    borderColor: getBorderColor(color),
    borderWidth: getBorderSize(size),
  }),
  fillBorderAll: ({size, color}) => ({
    borderStartWidth: getBorderSize(size),
    borderEndWidth: getBorderSize(size),
    borderTopWidth: getBorderSize(size),
    borderBottomWidth: getBorderSize(size),
    borderColor: getBorderColor(color),
  }),
  fillBorderBottom: ({size, color}) => ({
    borderBottomColor: getBorderColor(color),
    borderBottomWidth: getBorderSize(size),
  }),
  fillBorderTop: ({size, color}) => ({
    borderTopColor: getBorderColor(color),
    borderTopWidth: getBorderSize(size),
  }),
  fillBorderStart: ({size, color}) => ({
    borderLeftColor: getBorderColor(color),
    borderLeftWidth: getBorderSize(size),
  }),
  fillBorderEnd: ({size, color}) => ({
    borderRightColor: getBorderColor(color),
    borderRightWidth: getBorderSize(size),
  }),
  fillShadow: ({
    shadowColor = '#555555',
    width = 0,
    height,
    shadowRadius = 1,
    shadowOpacity = 0.4,
    elevation = 4,
  }) => ({
    shadowColor,
    shadowOffset: {
      width: width,
      height: height,
    },
    shadowRadius,
    shadowOpacity,
    elevation,
  }),
  fillTextShadow: ({
    shadowColor = '#555555',
    width = 1,
    height = 1,
    shadowRadius = 1,
    shadowOpacity = 0.4,
  }) => ({
    textShadowColor: shadowColor,
    textShadowOffset: {
      width: width,
      height: height,
    },
    textShadowRadius: shadowRadius,
    shadowOpacity: shadowOpacity,
  }),
};
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
