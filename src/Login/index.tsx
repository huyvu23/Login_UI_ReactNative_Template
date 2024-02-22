import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import normalize from 'react-native-normalize';

const LoginScreen = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ImageBackground
            source={require('../assets/image/bg1.png')}
            resizeMode="cover"
            style={styles.container}>
            <View style={{flex: 1}}>
              <View style={styles.wrapTextLogo}>
                <Text
                  style={{
                    fontSize: normalize(30),
                    fontWeight: '600',
                    color: 'white',
                  }}>
                  Huy Vũ Tech
                </Text>
              </View>
            </View>
            <View style={styles.wrapContent}>
              <View
                style={{
                  paddingTop: normalize(20),
                  paddingHorizontal: normalize(10),
                }}>
                <View
                  style={{
                    marginTop: normalize(20),
                    display: 'flex',
                    rowGap: normalize(20),
                  }}>
                  <TextInput
                    mode="outlined"
                    label="Email"
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                  <TextInput
                    mode="outlined"
                    label="Mật khẩu"
                    value={text}
                    onChangeText={text => setText(text)}
                  />
                  <Button
                    mode="contained"
                    style={{
                        borderRadius:10
                    }}
                    onPress={() => console.log('Pressed')}>
                    Đăng nhập
                  </Button>
                </View>
              </View>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapTextLogo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapContent: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(50),
  },
});

export default LoginScreen;
