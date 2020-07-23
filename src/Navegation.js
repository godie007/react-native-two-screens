import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './store';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import Home from './containers/Home';
import detailsMovies from './containers/DetailsMovies';
import Icon from 'react-native-vector-icons/Ionicons';
import { FloatingAction } from 'react-native-floating-action';
import { customColors } from './constants/colors';

const detailsMoviestack = createStackNavigator();
const HomeStack = createStackNavigator();
const store = configureStore({});
const StackHome = createStackNavigator();

/**
 * StackScreen para la navegación de la página principal
 * @param {*} navigation
 */
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: customColors.blueHeader,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="home"
      component={Home}
      options={{
        headerTitle: false,
        headerTransparent: true,
      }}
    />
  </HomeStack.Navigator>
);

/**
 * StackScreen para la navegación de la página de detalles
 * @param {*} navigation
 */
const DetailsStackScreen = ({ navigation: { goBack } }) => (
  <detailsMoviestack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <detailsMoviestack.Screen
      name="Details"
      component={detailsMovies}
      options={{
        headerTitle: false,
        headerTransparent: true,
        headerLeft: (props) => (
          <Icon.Button
            name="arrow-back"
            backgroundColor="transparent"
            size={30}
            onPress={() => goBack()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="ios-heart-outline"
            backgroundColor="transparent"
            size={30}
            onPress={() => { }}
          />
        ),
      }}
    />
  </detailsMoviestack.Navigator>
);

const Init = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: customColors.grayDefault,
      text: customColors.blueNavegation,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: customColors.blueNavegation,
      text: customColors.grayDefault,
    },
  };

  const theme = !isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  /**
   * Funcion para intercambiar el tema de de oscuro/claro
   */
  function toggleTheme() {
    setIsDarkTheme((isDark) => !isDark);
  }

  const FloatingMenu = (
    <FloatingAction
      actions={[
        {
          text: 'Change Appearance',
          icon: require('./assets/images/ligth.png'),
          name: 'bt_accessibility',
          position: 2,
        },
      ]}
      onPressItem={() => {
        toggleTheme();
      }}
    />
  );

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <StackHome.Navigator>
            <StackHome.Screen
              name="Home"
              component={HomeStackScreen}
              options={{ title: 'Home', headerShown: false }}
            />
            <StackHome.Screen name="detailsMovies" component={DetailsStackScreen}
              options={{
                headerShown: false
              }}
            />
          </StackHome.Navigator>
        </NavigationContainer>
        {FloatingMenu}
      </PaperProvider>
    </StoreProvider>
  );
};

export default Init;
