import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { TaskProps } from '../../components/Task/TaskProps';
import { Form } from '../../components/form';
import { Labels } from '../../components/Labels';
import { TasksList } from '../../components/TasksList';

export const Home = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [createdTasks, setCreatedTasks] = useState(0);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    let amountCreated = 0;
    let amountCompleted = 0;

    tasks.map((task) => {
      if (!task.isFinished) {
        amountCreated += 1;
      } else {
        amountCompleted += 1;
      }
    });

    setCreatedTasks(amountCreated);
    setCompletedTasks(amountCompleted);
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form setTasks={setTasks} />
      <Labels createdTasks={createdTasks} completedTasks={completedTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </SafeAreaView>
  );
};
