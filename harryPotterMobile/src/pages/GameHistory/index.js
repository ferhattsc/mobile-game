/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

const GameHistory = ({navigation}) => {
  const [points, setPoints] = React.useState([]);
  const [bestPoint, setBestPoint] = React.useState(0);

  useEffect(() => {
    // const oldPoints = storage.getString('point')?.split(' ');
    // setPoints(oldPoints);
    // points.map(item => bestPoint < item && setBestPoint(item));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.gameHeader, styles.itemShadow]}>Point History</Text>
      <Text>Best Point : {Math.max(bestPoint)} </Text>
      <ScrollView style={{alignSelf: 'center', paddingTop: '15%'}}>
        {points?.map(
          (item, index) =>
            item != '' && (
              <Text>
                {index + 1}. Point :{item}
              </Text>
            ),
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.logoutButton}>
        <Text style={styles.logoutText}>LOGOUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GameHistory;
