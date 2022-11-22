import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    marginTop: -26,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderRadius: 6,
    padding: 16,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  inputOnFocus: {
    borderWidth: 1,
    borderColor: THEME.COLORS.PURPLE_DARK,
    color: THEME.COLORS.GRAY_100,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: THEME.COLORS.BLUE_DARK,
    borderRadius: 6,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
