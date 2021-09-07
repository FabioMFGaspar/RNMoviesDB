import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
/* istanbul ignore file */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import configureStore from './store';
import SearchScreen from './screens/search';
import DetailsScreen from './screens/details';
import Styles from './screens/styles';

const App: React.FC = () => {
  const store = configureStore();
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={Styles.screenWrapper}>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: Styles.header,
              headerTitleStyle: Styles.headerTitle,
              headerTintColor: 'white',
              headerBackTitle: '',
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{title: 'MoviesDB'}}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
