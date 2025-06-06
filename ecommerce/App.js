import Navigator from './navigation/navigator';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './TabNavigator/TabNavigator'
import {Provider, useSelector} from 'react-redux'
import {store} from './app/store'
import {SQLiteProvider} from 'expo-sqlite' 


export const initialiseDb= async(db)=>{
  try{
    await db.execAsync('create table if not exists sessions(id integer primary key AUTOINCREMENT  not null, email text not null, localId text not null)')
  }
  catch{
    console.log("error al inicializar")
  }

}
function MainApp(){

  const user=useSelector(state=>state.auth.email)
  return (
    <SQLiteProvider databaseName='ecommerce' onInit={initialiseDb}>
      <Provider store={store}>
        <NavigationContainer>
          {
            user ? (<TabNavigator/>):(<Navigator/>)
          }
            
        </NavigationContainer>
      </Provider>
      </SQLiteProvider>
  )
}

export default function App() {

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}