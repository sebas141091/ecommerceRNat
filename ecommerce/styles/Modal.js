import { StyleSheet } from "react-native";


const styleModal = StyleSheet.create({
    ConteinerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center'
    },
    labelModal: {
        fontSize: 16,
        marginBottom: 15,
    }

})

export default styleModal