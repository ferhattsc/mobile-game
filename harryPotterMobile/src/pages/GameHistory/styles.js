import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
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
    resizeMode: 'contain',
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
  logoutButton: {
    alignSelf: 'center',
    marginBottom: '10%',
    backgroundColor: '#42C2FF',
    padding: 10,
    borderRadius: 10,
  },
  logoutText: {
    color: 'black',
  },
});
