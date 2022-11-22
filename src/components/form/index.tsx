import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { FormProps } from './FormProps';
import { styles } from './styles';
import buttonImg from '../../assets/button.png';

export const Form = ({ useCustomStyle, setUseCustomStyle }: FormProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => setUseCustomStyle(true)}
        style={[useCustomStyle && styles.inputOnFocus, styles.input]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.COLORS.GRAY_300}
      />

      <TouchableOpacity style={styles.button}>
        <Image source={buttonImg} />
      </TouchableOpacity>
    </View>
  );
};
