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
    , boton:{
        backgroundColor:"blue",
        marginLeft:10,
        marginRight:20,
        width:'95%',
        backgroundColor:"#5983a9",
        alignContent:"center",
        borderRadius:10,
        marginTop:10
    },
    labelBoton:{
        
        fontSize:25,
        color:"white",
        alignSelf:"center",
        fontWeight:"bold",
        padding:5,
        
       
    },
    

})

export default styleModal