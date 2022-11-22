import { Text, View } from 'react-native';
import { LabelsProps } from './LabelsProps';
import { styles } from './styles';

export const Labels = ({ createdTasks, completedTasks }: LabelsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <Text style={styles.createdTaskText}>Criadas</Text>
        <Text style={styles.tasksValue}>{createdTasks}</Text>
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.completedTaskText}>Concluídas</Text>
        <Text style={styles.tasksValue}>{completedTasks}</Text>
      </View>
    </View>
  );
};
