import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'


function listProd({prods}) {

    return (
            <View>
                <FlatList 
                    data={prods}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{
                            borderWidth: 2, borderColor: "black"
                            , margin: 5, borderRadius: 22
                        }}>
                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={{ fontSize: 25, fontWeight: "bold",alignSelf:"center" }}>{item.productos}</Text>
                                <Image
                                    source={item.imagelocal}
                                    style={{ width: 130, height: 130 }}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
    )

}


export default listProd;