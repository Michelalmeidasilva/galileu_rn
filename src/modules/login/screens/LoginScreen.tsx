import React, {FC} from 'react';
import {
  View,
  TextInput,
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useUser} from 'providers';

import useLoginController from 'modules/login/controllers/useLoginController';

type Props = {
  textStyle?: StyleProp<TextStyle>;
  styles: StyleProp<ViewStyle>;
  icon?: string;
} & ButtonProps;

const Button: FC<Props> = ({title, icon, textStyle, styles, ...props}) => {
  return (
    <TouchableOpacity style={[customStyles.button, styles]} {...props}>
      {icon ? <Icon name={icon} size={24} color="white" /> : <></>}

      <Text style={[customStyles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const customStyles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});

const LoginScreen = ({}) => {
  const {loginWithCredentials, loginWithGoogle} = useUser();

  const controller = useLoginController({
    loginWithCredentials,
    loginWithGoogle,
  });
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Welcome,</Text>

      <Text style={styles.subtitle}>
        Start exploring Galileu App with a quick login!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={item => (controller.user.email = item)}
      />
      <TextInput
        style={styles.input}
        textContentType="password"
        placeholder="Password"
        onChangeText={item => (controller.user.password = item)}
      />

      <View
        style={{
          flexDirection: 'row-reverse',
          marginHorizontal: 24,
          marginVertical: 12,
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Register');
          }}>
          <Text> Recovery Password</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Sign in with e-mail"
        styles={styles?.buttonLogin}
        disabled={controller?.isLoading}
        onPress={async () => {
          await controller.login('credentials');
        }}
      />

      <View style={styles.separateSection}>
        <Text style={{marginHorizontal: 20}}>Or Continue with</Text>
      </View>

      <Button
        title="Google"
        styles={styles?.buttonGoogle}
        textStyle={styles?.buttonGoogle.textStyle}
        onPress={async () => await controller.login('google')}
      />

      <View style={styles.footer}>
        <Text> Not a Member?</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{color: 'blue'}}> Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    // justifyContent: 'center',
  },
  subtitle: {
    paddingLeft: 24,
    fontSize: 18,
    paddingBottom: 24,
  },
  title: {
    padding: 24,
    fontWeight: '700',
    fontSize: 24,
  },
  footer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 24,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: 'black',
  },
  separateSection: {
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    paddingHorizontal: 36,
    marginTop: 36,
  },
  buttonLogin: {
    marginHorizontal: 24,
    marginTop: 24,
    backgroundColor: 'black',
  },
  buttonGoogle: {
    marginHorizontal: 24,
    marginTop: 36,
    borderColor: 'black',
    borderWidth: 1,
    textStyle: {
      color: 'black',
    },
    backgroundColor: 'white',
  },
});

export {LoginScreen};
