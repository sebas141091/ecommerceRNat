import { View, Text, Button, TextInput, TouchableOpacity, Modal } from 'react-native'
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import Ract, { useEffect, useState } from 'react'
import { useSQLiteContext } from 'expo-sqlite';
import styleSus from '../styles/styleSuscribe';
import { useLoginMutation } from '../features/auth/authApi';

function Loggin({ navigation }) {

    const db = useSQLiteContext()
    const [inputEmail, setInputEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [mensajeModal, setMensajeModal] = useState('');

    const dispacth = useDispatch()
    const [login] = useLoginMutation();

    const mostrarAlerta = (mensaje) => {
        setMensajeModal(mensaje);
        setModalVisible(true);
    };

    useEffect(() => {
        async function setup() {
            const result = await db.getFirstAsync("select * from sessions")
            if (result.email) {
                dispacth(setUser(result.email))
            }
        }

        setup()
    }, [])

    const saveUserDb = async (email, password) => {
        try {
            const res = await db.runAsync('insert into sessions (email , localId) values(?,?)', email, password)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleLogin() {
        const result = await login({ email: inputEmail, password })
        if (result.data) {
            dispacth(setUser(inputEmail))
            await saveUserDb(inputEmail, password)
        } else {
            mostrarAlerta('error al iniciar sesion')
        }
    }
    return (
        <View style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 50 }}>Bienvenido</Text>
            <Text style={{ fontSize: 25 }}>ingrese usuario</Text>
            <TextInput style={styleSus.textInputs} placeholder='ingrese usuario'
                value={inputEmail}
                onChangeText={(text) => setInputEmail(text)}
            />
            <Text style={{ fontSize: 25 }}>ingrese Contrasena</Text>
            <TextInput style={styleSus.textInputs} placeholder='ingrese password'
                value={password}
                onChangeText={(text) => setPassword(text)} secureTextEntry
            />

            <Button title='Entrar' onPress={handleLogin} />
            <View style={{ marginTop: 7 }}>
                <Text>no tiene usuario?
                    <TouchableOpacity style={{ marginTop: 6 }} onPress={() => navigation.navigate('Suscribe')}>
                        <Text style={{ color: 'blue', fontWeight: "bold" }}>Suscribirse</Text>
                    </TouchableOpacity>

                </Text>
            </View>


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


export default Loggin; 