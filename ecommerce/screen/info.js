import { View, Text, TouchableOpacity, Modal, Platform, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MapView, { Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { clearUser } from '../features/auth/authSlice';
import { useSQLiteContext } from 'expo-sqlite';
import styleModal from '../styles/Modal'
import styleInfo from '../styles/styleInfo';
import { useState } from 'react';

function Info() {
  const user = useSelector(state => state.auth.email);
  const [modalVisible, setModalVisible] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');

  const initial = user?.charAt(0)?.toUpperCase() || '?';
  const db = useSQLiteContext();
  const dispacth = useDispatch();


  const mostrarAlerta = (mensaje) => {
    setMensajeModal(mensaje);
    setModalVisible(true);
  };

  const logout = async () => {
    try {
      const result = await db.runAsync('delete from sessions where email=$email', { $email: user })
      mostrarAlerta('Hasta la proxima')
      dispacth(clearUser(user))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={styleInfo.container}>
      <Text style={styleInfo.titulo}>Bienvenido</Text>

      <View style={styleInfo.avatarContainer}>
        <View style={styleInfo.circuloUser}>
          <Text style={styleInfo.inicialName}>{initial}</Text>
        </View>

        <TouchableOpacity style={styleInfo.camaraBoton}>
          <Icon name="photo" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styleInfo.email}>{user}</Text>

        <TouchableOpacity style={{
          borderRadius: 20,
          padding: 8,
        }} onPress={logout}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>cerrar sesion</Text>
          <Icon name="logout" size={24} style={{borderRadius:5, alignSelf: "center" ,backgroundColor:"red" ,color:"white",fontWeight:"bold"}} />
        </TouchableOpacity>


      </View>
      <View style={{ flex: 1 }}>
        <View style={{}}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 15 }}>Nos encontramos ubicados en:</Text>
          <MapView
            style={{ height: 390, borderRadius: 20, overflow: Platform.OS === "android" ? "hidden" : "visible" }}
            initialRegion={{
              latitude: -34.6038,
              longitude: -58.3817,
              latitudeDelta: 0.2,
              longitudeDelta: 0.3,
            }}>
            <Marker
              coordinate={{ latitude: -34.6038, longitude: -58.3817 }}
              title='Buenos Aires' description='Argentina' />

          </MapView>
        </View>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>

        <View style={styleModal.ConteinerModal}>
          <View style={styleModal.modal}>
            <Text style={[styleModal.labelModal, { fontSize: 25 }]}>{mensajeModal}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={[styleModal.boton, { width: '100%' }]}>
              <Text style={styleModal.labelBoton}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

export default Info; 