import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { styles } from './styles';
import { TaskComponentProps } from './TaskProps';
import trashImg from '../../assets/trash.png';
import { THEME } from '../../theme';

export const Task = ({ id, content, isFinished, setTasks, tasks }: TaskComponentProps) => {
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

  const handleMarkAsCompleteTask = (id: string) => {
    const prevTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isFinished: !task.isFinished };
      }
      return task;
    });

    setTasks(prevTasks);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        color={isFinished ? THEME.COLORS.PURPLE_DARK : THEME.COLORS.BLUE}
        disabled={false}
        value={isFinished}
        style={styles.checkbox}
        onValueChange={() => handleMarkAsCompleteTask(id)}
      />

      <Text style={[styles.content, isFinished && styles.contentLineThrough]}>{content}</Text>
      <TouchableOpacity onPress={() => handleTaskRemove(id)} style={styles.button}>
        <Image source={trashImg} />
      </TouchableOpacity>
    </View>
  );
};
