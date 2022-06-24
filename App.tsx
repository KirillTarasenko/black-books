import React, { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NAVIGATION_ANIMATION, NAVIGATION_HEADER_STYLE } from 'constants/ui-configs';
import Background from './src/components/Background';

import { HomeScreen } from './src/screens/dashboard';
import { InfoScreen } from './src/screens/info';
import { HOME, INFO, LOADING } from './src/constants/routes';
import { LoadingScreen } from './src/screens/loading';
import { navigationRef } from './src/screens';

const Stack = createSharedElementStackNavigator();

const App: () => JSX.Element = () => {
  const sharedImage = useCallback(route => {
    const { item } = route.params;
    return [`item.${item.id}.photo`];
  }, []);

  return (
    <>
      <Background />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={LOADING}>
          <Stack.Screen name={LOADING} component={LoadingScreen} />
          <Stack.Screen
            name={HOME}
            component={HomeScreen}
            options={{
              ...NAVIGATION_HEADER_STYLE,
              ...NAVIGATION_ANIMATION,
              title: 'Black Books',
            }}
          />
          <Stack.Screen
            name={INFO}
            component={InfoScreen}
            sharedElements={sharedImage}
            options={{
              headerBackTitleVisible: false,
              ...NAVIGATION_HEADER_STYLE,
              ...NAVIGATION_ANIMATION,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
