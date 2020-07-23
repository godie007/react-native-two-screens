import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    width: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    top: 30,
    backgroundColor: '#8EBEE1',
  },
  header: {
    height: 230,
  },
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#5CA1D4',
  },
  textTitle: {
    top: 50,
    position: 'relative',
    color: 'white',
    margin: 60,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerMovies: {
    width: '100%',
    position: 'relative',
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  centrar: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width:380,
    left:45
  },
  scroll: {
    flexGrow: 1,
  },
  viewFlex: {
    flex: 1,
    right:60
  },
  viewRow: {
    flex: 1,
    flexDirection: 'row',
  },
  viewColumn: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default styles;
