import { Image, Text, View } from 'react-native';
import clipboardImg from '../../assets/clipboard.png';
import { styles } from './styles';

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image source={clipboardImg} style={styles.clipboardLogo} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
};
