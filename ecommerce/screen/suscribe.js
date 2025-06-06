import { View, Text, Button, TextInput } from 'react-native'
import styleSus from '../styles/styleSuscribe';
import Ract, { useState } from 'react'
import { useSignupMutation } from '../features/auth/authApi';

function Suscribe({ navigation }) {
  const [inputEmail, setInputEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passRepet, setPassRepet] = useState('');
  const [isValid, setIsValid] = useState(true);

  const [signup, { isLoading }] = useSignupMutation();
  const [modalVisible, setModalVisible] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');
  const mostrarAlerta = (mensaje) => {
    setMensajeModal(mensaje);
    setModalVisible(true);
  };

  const handleSignup = async () => {

    if (!inputEmail || !password || !passRepet || !isValid) {
      mostrarAlerta("hay algun campo sin llegar o con formato invalido")
    }
    else {
      if (password === passRepet) {
        try {
          const result = await signup({ email: inputEmail, password });
          //console.log(result.code,"este es el result")

          if (result.data) {
            //dispatch(setUser( {email: result.data.email}));

            navigation.navigate('Loggin')
          } else {
            console.log(result.error);
            Alert.alert('Error', 'No se pudo registrar. Intenta con otro email.');

          }
        } catch (error) {
          Alert.alert('Error inesperado', error.message || 'Inténtalo de nuevo más tarde.');
        }
      }
      else {
        mostrarAlerta("las contraseñas no coinciden")
      }
    }

  };

  return (
    <View style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 50 }}>Suscribirse</Text>
      <Text style={{ fontSize: 25 }}>Ingrese usuario</Text>
      <TextInput style={styleSus.textInputs} placeholder='Ingrese usuario'
        value={inputEmail} keyboardType='email-adress'
        onChangeText={(text) => {
          setInputEmail(text)
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          setIsValid(emailRegex.test(text));
        }}
      />
      {!isValid && <Text style={{ color: "red" }} >Email no válido</Text>}
      <Text style={{ fontSize: 25 }}>Ingrese Contrasena</Text>
      <TextInput style={styleSus.textInputs} placeholder='Ingrese password'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Text style={{ fontSize: 25 }}>repetir Contrasena</Text>
      <TextInput style={styleSus.textInputs} placeholder='repetir password'
        value={passRepet}
        onChangeText={(text) => setPassRepet(text)} />

      <Button title={isLoading ? "Registrando..." : "Registrar"} onPress={handleSignup} disabled={isLoading} />

      <Button title="Ya tengo cuenta" onPress={() => navigation.navigate('Loggin')} />
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>

        <View style={despacho_style.ConteinerModal}>
          <View style={despacho_style.modal}>
            <Text style={[despacho_style.labelModal, { fontSize: 25 }]}>{mensajeModal}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={[Boton.boton, { width: '100%' }]}>
              <Text style={Boton.labelBoton}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )

}


export default Suscribe