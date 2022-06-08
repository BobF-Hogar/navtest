import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const DetailScreen = props => {
  const {item} = props.route.params;
  return (
    <SafeAreaView style={styles.centerMe}>
      <View style={styles.panel}>
        <SharedElement id={`item.${item.id}.name`}>
          <Text style={styles.title}>{item.name}</Text>
        </SharedElement>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image style={styles.portrait} source={{uri: item.photoUrl}} />
        </SharedElement>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          felis erat. Ut eu leo vehicula, faucibus nibh at, posuere velit. Cras
          et interdum dolor, quis bibendum mi. Nulla fringilla consectetur
          felis, vitae dapibus magna venenatis a. Ut maximus lorem est, sed
          posuere nibh viverra a. Integer quis tincidunt ligula. Nulla pulvinar
          dolor et magna auctor lacinia vel mattis sapien. Quisque congue
          commodo consectetur. Donec nunc lacus, tristique et nibh id, ultrices
          interdum mi. Vivamus nec.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(DetailScreen);

const styles = StyleSheet.create({
  centerMe: {
    alignItems: 'center',
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  panel: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 8,
    padding: 8,
  },
  portrait: {
    borderRadius: 4,
    height: 300,
    width: 300,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    marginTop: 8,
  },
});
