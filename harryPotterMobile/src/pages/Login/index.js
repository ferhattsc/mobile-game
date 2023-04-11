import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import {styles} from './styles';
import {login} from '../../store/dataSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const obj = {
      email,
      password,
    };
    // Perform login logic here
    dispatch(login(obj))
      .then(res => {
        if (res.payload.success) {
          navigation.navigate('Home');
        }
      })
      .catch(err => {
        console.log('hataa', err);
      });
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require('./logo.png')} /> */}
      <Text style={styles.heading}>Hoşgeldiniz</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>Şifre</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <Button title="Giriş Yap" onPress={handleLogin} />
        <Button title="Kayıt Ol" onPress={handleRegister} />
      </View>
    </View>
  );
};

export default Login;
