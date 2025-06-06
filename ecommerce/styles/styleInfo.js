import { StyleSheet } from "react-native";


const styleInfo = StyleSheet.create({
container: {
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor: '#fff',
    flex: 1,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  circuloUser: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inicialName: {
    fontSize: 48,
    color: '#333',
    fontWeight: 'bold',
  },
  camaraBoton: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 8,
  },
  email: {
    fontSize: 20,
    color: '#555',
    marginTop: 10,
    alignSelf:"center"
  },
})


export default styleInfo;