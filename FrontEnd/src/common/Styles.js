import {Dimensions, Platform} from 'react-native';
// import {getStatusBarHeight} from 'react-native-status-bar-height';
import Device from './Device';
import {normalizeText} from '@utils/mixins';
const {height, width} = Dimensions.get('window');

const Styles = {
  width,
  height: Platform.OS !== 'ios' ? height : height - 20,
  navBarHeight: Platform.OS !== 'ios' ? height - width : 0,
  headerHeight: Platform.OS === 'ios' ? 40 : 56,

  thumbnailRatio: 1.2,

  app: {
    flexGrow: 1,
    backgroundColor: Device.isIphoneX ? '#FFF' : '#000',
    paddingTop: Device.ToolbarHeight,
  },
  bottomNavbarHeight: 60,
  bottomLabelStyle: {
    fontSize: 10,
    // textTransform: 'lowcase'
  },
  FontSize: {
    tiny: 12,
    medium: 14,
    big: 16,
  },
  IconSize: {
    TextInput: 20,
    InGroup: 30,
    SmallGroup: 15,
  },
  FontFamily: {
    QuicksandBold: 'Quicksand-Bold',
    QuicksandLight: 'Quicksand-Light',
    QuicksandMedium: 'Quicksand-Medium',
    QuicksandRegular: 'Quicksand-Regular',
    QuicksandSemiBold: 'Quicksand-SemiBold',
  },
  specifications: {
    // statusBarHeight: getStatusBarHeight(),
    headerHeight: 54,
    bottomNavbarHeight: 50,

    smallIconSize: 20,
    iconSize: 30,
    largeIconSize: 40,
    hugeIconSize: 120,
    posterAspectRation: 0.6667,
    backdropAspectRation: 1.78,
  },
  spacing: {
    xTiny: 4,
    tiny: 8,
    small: 16,
    base: 24,
    large: 48,
    xLarge: 64,
  },
};

Styles.Common = {
  Column: {},
  ColumnCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColumnCenterTop: {
    alignItems: 'center',
  },
  ColumnCenterBottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ColumnCenterLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ColumnCenterRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  RowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  RowCenterTop: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  RowCenterBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  RowCenterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RowCenterRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  RowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  IconSearchView: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 10,
    borderRadius: 50,

    shadowOffset: {width: 0, height: -4},
    shadowColor: 'rgba(0,0,0, .3)',
    elevation: 10,
    shadowOpacity: 0.1,
    zIndex: 9999,
  },
  IconSearch: {
    width: 20,
    height: 20,
    margin: 12,
    zIndex: 9999,
  },
};

export default Styles;
