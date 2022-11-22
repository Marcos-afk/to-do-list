import { FlatList } from 'react-native';
import { EmptyList } from '../EmptyList';
import { Task } from '../Task';
import { styles } from './styles';
import { TasksListProps } from './TasksListProps';

export const TasksList = ({ tasks, setTasks }: TasksListProps) => {
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Task id={item.id} content={item.content} isFinished={item.isFinished} setTasks={setTasks} tasks={tasks} />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList />}
    />
  );
};
