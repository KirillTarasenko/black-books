import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { BG_1 } from 'constants/images';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'utils/ui';

const Background = (): JSX.Element | null => {
  return <FastImage source={BG_1} style={styles.root} />;
};

export default React.memo(Background);

const styles = StyleSheet.create({
  root: {
    opacity: 0.5,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: 0,
  },
});
