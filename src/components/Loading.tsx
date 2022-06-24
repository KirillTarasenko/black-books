import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const Loading = (): JSX.Element | null => {
  return (
    <LottieView
      loop
      autoPlay
      style={styles.root}
      source={require('../../assets/animations/books-anim.json')}
    />
  );
};

const styles = StyleSheet.create({
  root: { height: 300, width: 300 },
});

export default React.memo(Loading);
