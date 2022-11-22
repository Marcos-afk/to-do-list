import { Text, View } from 'react-native';
import { TaskProps } from './TaskProps';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Task = ({ id, content, isFinished }: TaskProps) => {
  return (
    <View>
      <Text>Teste de componente</Text>
    </View>
  );
};
