/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './src/components/mapScreen/MapView.style';
import MyStack from './src/navigation/Navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <MyStack />
    </SafeAreaView>
  );
}
export default App;
