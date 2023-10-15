import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import COLORS from '../../Consts/colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt1}>Welcome to</Text>
          <Text style={styles.headerTxt2}>Plants World</Text>
        </View>
        <Image
          source={require('../../Assets/trolley.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.searchBar}>
        <View style={styles.searchComponent}>
          <Image
            source={require('../../Assets/find.png')}
            style={styles.image}
          />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Image
            source={require('../../Assets/sort.png')}
            style={styles.image}
          />
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
  searchBar: {
    marginTop: 13,
    flexDirection: 'row',
  },
  image: {width: 40, height: 40, marginLeft: 20},
  searchComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    height: 50,
  },
  input: {
    flex: 1,
    color: COLORS.dark,
    marginLeft: 5,
  },
  sortBtn: {},
});
