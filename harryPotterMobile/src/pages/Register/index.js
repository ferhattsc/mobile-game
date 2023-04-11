import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import {styles} from './styles';
import {register} from '../../store/dataSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    const obj = {
      name: username,
      email,
      password,
    };
    dispatch(register(obj))
      .then(res => {
        console.log('response taha', res);
        if (res.payload.success) {
          navigation.navigate('Home');
        }
      })
      .catch(err => {
        console.log('hataa', err);
      });
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require('./logo.png')} /> */}
      <Text style={styles.heading}>Hoşgeldiniz</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={text => setUsername(text)}
        />
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
        <Button title="Kayıt ol" onPress={handleRegister} />
        <Text>Hesabın var mı ?</Text>
        <Button title="Giriş Yap" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;
