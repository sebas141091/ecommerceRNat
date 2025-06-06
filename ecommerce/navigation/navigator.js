import Loggin from '../screen/loggin'
import Suscribe from '../screen/suscribe'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator();

function Navigator() {
    return (
        <stack.Navigator initialRouteName='Loggin' screenOptions={{ headerShown: false }}>
            <stack.Screen name='Loggin' component={Loggin} />
            <stack.Screen name='Suscribe' component={Suscribe} />
        </stack.Navigator>
    )
}
export default Navigator;

