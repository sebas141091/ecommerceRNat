import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import productos from '../datos/productos'

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
            <View>
                <FlatList style={{}}
                    data={productosConIMGLocal}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{
                            borderWidth: 2, borderColor: "black"
                            , margin: 5, borderRadius: 22
                        }}>
                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.productos}</Text>
                                <Image
                                    source={item.imagelocal}
                                    style={{ width: 130, height: 130 }}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )

}


export default Products;