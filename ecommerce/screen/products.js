import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import productos from '../datos/productos'
import ListProd from './ListProduct';

function Products() {

    const productosConIMGLocal = productos.map((prod) => {
        let imgLocal;

        switch (prod.id) {
            case 1:
                imgLocal = require('../img/celulares.webp');
                break;
            case 2:
                imgLocal = require('../img/cocina.webp');
                break;
            case 3:
                imgLocal = require('../img/lavarropa.png');
                break;
            case 4:
                imgLocal = require('../img/notebook.png');
                break;
            case 5:
                imgLocal = require('../img/televisor.png');
                break;
            default:
                imgLocal = require('../img/televisor.png')
        }
        return {
            ...prod, imagelocal: imgLocal
        }

    })

    return (
        <View style={{ flex: 1, justifyContent: "space-around" }}>

            <Text style={{ fontSize: 40, marginTop: 50, fontWeight: "bold" }}>Products</Text>
            <ListProd prods={productosConIMGLocal}/>
        </View>
    )

}


export default Products;