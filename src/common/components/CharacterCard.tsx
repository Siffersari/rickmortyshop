import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

interface Props {
  data: {
    image?: string | null;
    name?: string | null;
  };
}

const CharacterCard: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      {data.image && <Image source={{uri: data.image}} style={styles.image} />}
      <View style={styles.details}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
    </View>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
  },
  image: {width: 70, height: 70},
  details: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
