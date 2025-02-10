import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText } from '../../components'
import logoImage from '../../../assets/LogoEmpire.png'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
      <CustomText>StarWars - Wiki</CustomText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 64,
    width: 64
  }
});
