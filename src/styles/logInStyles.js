import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  logo: {
    width: '100%',
    height: 300,
    top: -180,
    //left: -10,
  },

  account: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    height: 700,
    top: 60,
    borderTopLeftRadius: 100,
    position: 'absolute',
    backgroundColor: '#3C4142',
    width: '100%',
  },

  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  input: {
    height: 50,
    margin: 10,
    backgroundColor: '#D9DDDC',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#0054a6',
  },

  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  customBotton: {
    backgroundColor: '#FFC300',
    borderRadius: 10,
    padding: 5,
    width: '80%',
    marginTop: 50,
    height: 50,
    justifyContent: 'center',
  },

  textt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
  },

  signupContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
  },

  signText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
  },

  signupLink: {
    fontWeight: 'bold',
    color: '#FFC300',
    marginLeft: 5,
  },
});

export default styles;
