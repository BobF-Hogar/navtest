import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import imageList from '../data/images.json';

const ListScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigation.push('Profile', {item})}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image style={styles.thumbnail} source={{uri: item.photoUrl}} />
        </SharedElement>
        <SharedElement id={`item.${item.id}.name`}>
          <Text>{item.name}</Text>
        </SharedElement>
      </TouchableOpacity>
    );
  };

  return <FlatList data={imageList} renderItem={renderItem} />;
};

export default ListScreen;

const styles = StyleSheet.create({
  thumbnail: {
    borderRadius: 4,
    height: 100,
    marginRight: 8,
    width: 100,
  },
  thumbnailHolder: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
  },
  listItem: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 8,
  },
});
