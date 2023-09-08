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
import {TouchableOpacity} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt1}>Welcome to</Text>
          <Text style={styles.headerTxt2}>Plants World</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../Assets/trolley.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.searchComponent}>
          <Image
            source={require('../../Assets/find.png')}
            style={styles.image}
          />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.srtBtnContainer}>
          <View style={styles.sortBtn}>
            <TouchableOpacity>
              <Image
                source={require('../../Assets/sort.png')}
                style={styles.srtImg}
              />
            </TouchableOpacity>
          </View>
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  sortBtn: {
    width: 40,
    height: 40,
    marginLeft: 5,
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: COLORS.green,
  },
  srtImg: {
    width: 40,
    height: 40,
    marginTop: -2,
    color: COLORS.light,
  },
  srtBtnContainer: {
    marginRight: -0.5,
    marginLeft: 5,
  },
});
