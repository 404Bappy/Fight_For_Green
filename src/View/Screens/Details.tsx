import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../Consts/colors';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
// @ts-ignore
const Details = ({navigation, route}) => {
  const plant = route.params;
  return (
    <SafeAreaView style={styles.safeViewStyl}>
      <View style={styles.hdr}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/previous.png')}
            style={styles.BrksImg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Assets/trolley-cart.png')}
            style={styles.BrksImg}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  hdr: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  safeViewStyl: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  BrksImg: {
    height: 30,
    width: 30,
  },
});
