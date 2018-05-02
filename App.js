import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from "./components/Bananas";
import FlatListBasics from "./components/FlatListBasics";
import SectionListBasics from "./components/SectionListBasics";
import FetchExample from "./components/FetchExample";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Bananas />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <FlatListBasics/>
        <SectionListBasics/>
        <FetchExample/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
