import { ActivityIndicator, View } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.GRAY_700} />
    </View>
  );
};
