import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    marginTop: 32,
  },
  tasksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdTaskText: {
    color: THEME.COLORS.BLUE,
  },
  completedTaskText: {
    color: THEME.COLORS.PURPLE_DARK,
  },
  tasksValue: {
    color: THEME.COLORS.GRAY_200,
    backgroundColor: THEME.COLORS.GRAY_400,
    borderRadius: 999,
    marginLeft: 5,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'center',
  },
});
