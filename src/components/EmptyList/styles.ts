import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    alignItems: 'center',
    borderColor: THEME.COLORS.GRAY_400,
  },
  clipboardLogo: {
    marginTop: 50,
  },
  title: {
    marginTop: 16,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.GRAY_300,
    fontSize: THEME.FONT_SIZE.MD,
  },
  subTitle: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.GRAY_300,
    fontSize: THEME.FONT_SIZE.MD,
  },
});
