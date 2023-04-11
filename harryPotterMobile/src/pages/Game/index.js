/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View, Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import GameCard from '../../components/GameCard';
import {styles} from './styles';

const dummyCards = [
  {
    id: 1,
    matched: false,
    visible: false,
    name: '1',
    img: require('../../assets/images/albusdumb-gry-20.jpg'),
  },
  {
    id: 2,
    matched: false,
    visible: false,
    name: '2',
    img: require('../../assets/images/arthurweas-gry-10.jpg'),
  },
  {
    id: 3,
    matched: false,
    visible: false,
    name: '3',
    img: require('../../assets/images/harrypot-gry-10.jpg'),
  },
  {
    id: 4,
    matched: false,
    visible: false,
    name: '4',
    img: require('../../assets/images/hermione-gry-10.jpg'),
  },
  {
    id: 5,
    matched: false,
    visible: false,
    name: '5',
    img: require('../../assets/images/lilypot-gry-12.jpg'),
  },
  {
    id: 6,
    matched: false,
    visible: false,
    name: '6',
    img: require('../../assets/images/mineryamc-gry-13.jpg'),
  },
  {
    id: 7,
    matched: false,
    visible: false,
    name: '7',
    img: require('../../assets/images/peterpet-gry-5.jpg'),
  },
  {
    id: 8,
    matched: false,
    visible: false,
    name: '8',
    img: require('../../assets/images/remuslup-gry-10.jpg'),
  },
];

const Game2 = () => {
  const navigation = useNavigation();

  const [point, setPoint] = useState(0);
  const [cards, setCards] = useState(dummyCards);
  const [selectedCardIndex1, setSelectedCardIndex1] = useState(null);
  const [selectedCardIndex2, setSelectedCardIndex2] = useState(null);
  const [which, setWhich] = useState(1);
  const [gameEnd, setGameEnd] = useState(false);
  const [time, setTime] = useState();
  const [currentMinute, setCurrentMinute] = useState(60);
  const [openModal, setOpenModal] = useState(false);

  const shuffle = array => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const gameEndFunc = () => {
    console.log('Game over');
    setGameEnd(true);
    // clearInterval(timer);
  };

  useEffect(() => {
    if (cards.filter(item => item.visible == false).length == 0 && !gameEnd) {
      gameEndFunc();
    }

    if (point === 80 && !gameEnd) {
      gameEndFunc();
    }
    if (
      cards[selectedCardIndex1]?.name == cards[selectedCardIndex2]?.name &&
      selectedCardIndex1 != null &&
      selectedCardIndex2 != null
    ) {
      console.log('Matched');
      setPoint(point + 10);
      setSelectedCardIndex1(null);
      setSelectedCardIndex2(null);
    } else if (
      selectedCardIndex1 != selectedCardIndex2 &&
      selectedCardIndex1 != null &&
      selectedCardIndex2 != null
    ) {
      console.log('Unmatched');
      setTimeout(() => {
        setCards(
          cards.map((item, index) => {
            if (index == selectedCardIndex1 || index == selectedCardIndex2) {
              return {...item, visible: false};
            }
            return item;
          }),
        );
        setSelectedCardIndex1(null);
        setSelectedCardIndex2(null);
      }, 1000);
    }
  }, [cards, gameEnd, selectedCardIndex1, selectedCardIndex2, point]);

  const clickItem = (cardItem, cardIndex) => {
    let newStatus = [];
    cards.map((item, index) => {
      if (cardIndex == index) {
        newStatus.push({
          id: item.id,
          matched: item.matched,
          visible: !item.visible,
          name: item.name,
        });
      } else {
        newStatus.push(item);
      }
    });
    setCards(newStatus);
  };

  const handleClickGameCard = (item, index) => {
    clickItem(item, index);
    if (which === 1) {
      setSelectedCardIndex1(index);
      setWhich(2);
    } else {
      setSelectedCardIndex2(index);
      setWhich(1);
    }
  };

  useEffect(() => {
    setCards(shuffle([...cards, ...cards]));
    setPoint(0);
    setSelectedCardIndex1(null);
    setSelectedCardIndex2(null);
    setGameEnd(false);

    const timer = setInterval(() => {
      setPoint(prevPoint => prevPoint - 1);
    }, 1000);

    clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentMinute(currentMinute - 1);
    if (currentMinute === 0) {
      //   navigation.navigate('Home');
      setOpenModal(true);
      setCurrentMinute(60);
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.gameHeader, styles.itemShadow]}>
        Kullanıcı Puanı : <Text>{point}</Text>
      </Text>
      <Text style={[styles.gameHeader, styles.itemShadow]}>
        Kalan Süre : <Text>{currentMinute}</Text>
      </Text>
      <View>
        <View style={[styles.iconContainer, styles.itemShadow]}>
          {cards.map((item, index) => (
            <GameCard
              click={() => handleClickGameCard(item, index)}
              visible={item.visible}
              image={item.img}
              id={item.id}
              name={item.name}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.logoutButton}>
          <Text style={styles.logoutText}>Oyunu Bitir</Text>
        </TouchableOpacity>
      </View>
      <Modal transparent visible={openModal} animationType="fade">
        <View style={styles.gameEndPopup}>
          <View style={styles.gameEndContainer}>
            <Text style={styles.gameEndPoint}>Puanınız : {point} </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.logoutButton}>
              <Text style={styles.logoutText}>Oyunu Bitir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Game2;
