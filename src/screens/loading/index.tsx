import { CommonActions } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';

import Loading from 'components/Loading';

import { initAPI } from '../../api';
import { HOME } from '../../constants/routes';

import styles from './styles';

export function LoadingScreen({ navigation }): JSX.Element {
  React.useEffect(() => {
    initAPI().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: HOME }],
        }),
      );
    });
  }, [navigation]);
  return (
    <View style={styles.root}>
      <Loading />
    </View>
  );
}
