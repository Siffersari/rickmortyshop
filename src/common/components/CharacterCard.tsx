import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';

interface Props {
  data: {
    image?: string | null;
    name?: string | null;
    unitPrice?: number;
    chosenQuantity?: number;
  };
}

const CharacterCard: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      {data.image && <Image source={{uri: data.image}} style={styles.image} />}
      <View style={styles.details}>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{`U$ ${data.unitPrice}`}</Text>
      </View>
      <View style={styles.choseQuantityContainer}>
        <RectButton>
          <Icon name="minus" size={24} color="#3D7199" />
        </RectButton>
        <Text style={styles.choseQuantityText}>{data.chosenQuantity}</Text>
        <RectButton>
          <Icon name="plus" size={24} color="#3D7199" />
        </RectButton>
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
  choseQuantityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  choseQuantityText: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
