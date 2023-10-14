import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import COLORS from '../../Consts/colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt1}>Welcome to</Text>
          <Text style={styles.headerTxt2}>Plants World</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTxt1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  headerTxt2: {
    fontSize: 38,
    fontWeight: 'bold',
    color: COLORS.green,
  },
});
