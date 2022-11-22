import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <>
      {fontsLoader ? <Home /> : <Loading />}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </>
  );
}
