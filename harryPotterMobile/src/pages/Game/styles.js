import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8F9FD',
    width: '100%',
    justifyContent: 'center',
  },
  gameHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: '20%',
  },

  iconContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
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
  logoutButton: {
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: '#42C2FF',
    padding: 10,
    borderRadius: 10,
  },
  logoutText: {
    color: 'black',
  },
  gameEndPopup: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameEndContainer: {
    backgroundColor: 'rgba(255,255,255,.9)',
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameEndPoint: {
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: '10%',
    color: '#00A',
  },
});
