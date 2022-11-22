import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { TaskProps } from '../../components/Task/TaskProps';
import { Form } from '../../components/form';
import { Labels } from '../../components/Labels';
import { TasksList } from '../../components/TasksList';

export const Home = () => {
  const [useCustomStyle, setUseCustomStyle] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [createdTasks, setCreatedTasks] = useState(0);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const customStyle = () => {
    setUseCustomStyle(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={customStyle}>
      <View style={styles.container}>
        <Header />
        <Form useCustomStyle={useCustomStyle} setUseCustomStyle={setUseCustomStyle} setTasks={setTasks} />
        <Labels createdTasks={createdTasks} completedTasks={completedTasks} />
        <TasksList tasks={tasks} setTasks={setTasks} />
      </View>
    </TouchableWithoutFeedback>
  );
};
