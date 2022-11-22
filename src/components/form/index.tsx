import 'react-native-get-random-values';
import { useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { v4 } from 'uuid';
import { THEME } from '../../theme';
import { FormProps } from './FormProps';
import { styles } from './styles';
import buttonImg from '../../assets/button.png';
import { TaskProps } from '../Task/TaskProps';

export const Form = ({ useCustomStyle, setUseCustomStyle, setTasks }: FormProps) => {
  const [content, setContent] = useState('');

  const handleTaskAdd = () => {
    if (!content) {
      return Alert.alert('Conteúdo vazio', 'Insira informações sobre a tarefa que deseja adicionar');
    }

    const prevTask: TaskProps = {
      id: v4(),
      content,
      isFinished: false,
    };

    setTasks((prev) => [...prev, prevTask]);
    setContent('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => setUseCustomStyle(true)}
        style={[useCustomStyle && styles.inputOnFocus, styles.input]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.COLORS.GRAY_300}
        value={content}
        onChangeText={setContent}
        maxLength={200}
      />

      <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
        <Image source={buttonImg} />
      </TouchableOpacity>
    </View>
  );
};
