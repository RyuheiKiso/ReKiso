import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Animated, Vibration } from 'react-native';
import { AppRegistry } from 'react-native';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      Vibration.vibrate(); // フェードイン完了後にバイブレーション
    });
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Hello, World!
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // 背景色を黒色に変更
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF', // 文字色を白色に変更
  },
});

export default App;
AppRegistry.registerComponent('main', () => App);