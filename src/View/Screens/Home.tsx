/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import COLORS from '../../Consts/colors';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import Plant from '../../Consts/Plant';

const width = Dimensions.get('window').width / 2 - 30;

const Home = () => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
  // @ts-ignore
  const Card = ({Plant}) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.card}>
          <View style={styles.favContainer}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Image
                source={require('../../Assets/love.png')}
                style={styles.imageLove}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={Plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {Plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${Plant.price}
            </Text>

            <Image
              source={require('../../Assets/sign.png')}
              style={styles.plusAdd}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
            style={styles.imageShope}
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
      <View>
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                style={[
                  styles.categoryText,
                  catergoryIndex === index && styles.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Plant}
        renderItem={({item}) => <Card Plant={item} />}
      />
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
  imageShope: {width: 40, height: 40, marginTop: 5},
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: COLORS.green,
  },
  srtImg: {
    width: 30,
    height: 30,
    marginTop: -2,
    color: COLORS.light,
  },
  srtBtnContainer: {
    marginRight: -0.5,
    marginLeft: 5,
  },

  CategoryBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 30,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  imageLove: {
    height: 15,
    width: 15,
    color: COLORS.light,
  },
  plusAdd: {
    height: 25,
    width: 25,
  },
  favContainer: {
    alignItems: 'flex-end',
  },
});
