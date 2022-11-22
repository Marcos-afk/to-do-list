import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { styles } from './styles';
import { TaskProps } from './TaskProps';
import trashImg from '../../assets/trash.png';

export const Task = ({ id, content, isFinished, setTasks }: TaskProps) => {
  const removeTask = (id: string) => {
    Alert.alert('Tarefa removida', 'Tarefa removida com sucesso!');
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const handleTaskRemove = (id: string) => {
    Alert.alert('Remoção de tarefa', 'Deseja remover essa tarefa ?', [
      {
        text: 'Sim',
        onPress: () => removeTask(id),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <CheckBox disabled={false} value={isFinished} style={styles.checkbox} />
      <Text style={styles.content}>{content}</Text>
      <TouchableOpacity onPress={() => handleTaskRemove(id)}>
        <Image source={trashImg} />
      </TouchableOpacity>
    </View>
  );
};
