import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_500,
    padding: 12,
    borderRadius: 10,
  },
  content: {
    width: '80%',
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    textAlign: 'justify',
  },
  contentLineThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: THEME.COLORS.GRAY_300,
  },
  checkbox: {
    borderRadius: 10,
    borderColor: THEME.COLORS.BLUE,
    marginRight: 15,
  },
  button: {
    marginLeft: 5,
  },
});
