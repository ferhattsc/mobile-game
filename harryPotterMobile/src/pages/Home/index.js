import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.gameHeader, styles.itemShadow]}>
        Harry Potter {'\n'}Eşleştirme Oyunu
      </Text>
      <View>
        <View style={[styles.iconContainer, styles.itemShadow]}>
          <Image
            style={styles.gameIcon}
            source={require('../../assets/images/albusdumb-gry-20.jpg')}
          />
          <Image
            style={styles.gameIcon}
            source={require('../../assets/images/arthurweas-gry-10.jpg')}
          />
          <Image
            style={styles.gameIcon}
            source={require('../../assets/images/harrypot-gry-10.jpg')}
          />
          <Image
            style={styles.gameIcon}
            source={require('../../assets/images/hermione-gry-10.jpg')}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Game')}
        style={[styles.startButtonContainer, styles.itemShadow]}>
        <Text style={styles.startButton}>Oyuna Başla</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('GameHistory')}
        style={[styles.startButtonContainer, styles.itemShadow]}>
        <Text style={styles.startButton}>Game History</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={[styles.startButtonContainer, styles.itemShadow]}>
        <Text style={styles.startButton}>Oyundan Çık</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8F9FD',
  },
  gameHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: '20%',
  },
  gameIcon: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    margin: 10,
  },
  iconContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '80%',
  },
  startButton: {
    color: '#fff',
    fontSize: 20,
  },
  startButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#0AA1DD',
    marginTop: '10%',
    padding: '2%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
  itemShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.36,
    shadowRadius: 5.14,
  },
});
