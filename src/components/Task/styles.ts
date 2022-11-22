import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_500,
    padding: 15,
    borderRadius: 10,
  },
  content: {
    width: '70%',
    marginLeft: 10,
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
  },
  checkbox: {
    borderRadius: 10,
    borderColor: THEME.COLORS.BLUE,
  },
});
