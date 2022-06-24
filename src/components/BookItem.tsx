import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { IBook } from 'interfaces/api/books';

import { INFO } from '../constants/routes';
import { navigate } from '../screens';
import { SCREEN_WIDTH } from '../utils/ui';

import CachedImage from './CachedImage';

type IProps = {
  item: IBook;
};
export const FREE_SPACE_SIZE = 30;
const IMAGE_WIDTH = 60;
const BASE_WIDTH = SCREEN_WIDTH - FREE_SPACE_SIZE;
const TEXT_WIDTH = BASE_WIDTH - IMAGE_WIDTH - 50;

const BookItem = ({ item }: IProps): JSX.Element => {
  const { coverImageUrl, author, title, synopsis, pageCount, id } = item;
  const handlePress = useCallback(() => {
    navigate(INFO, { item });
  }, [item]);
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <SharedElement id={`item.${id}.photo`}>
          <CachedImage previewUrl={coverImageUrl} style={styles.image} resizeMode={'contain'} />
        </SharedElement>
        <View style={styles.textsContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={3} style={styles.synopsis}>
            {synopsis}
          </Text>
          <Text numberOfLines={2} style={styles.pageCount}>
            {`Pages: ${pageCount}`}
          </Text>
          <Text numberOfLines={1} style={styles.author}>
            {author}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(BookItem);

const styles = StyleSheet.create({
  author: {
    fontSize: 10,
    textAlign: 'left',
    left: 20,
    width: TEXT_WIDTH,
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: 'rgba(180, 120,60, 0.3  )',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    height: 105,
    padding: 10,
    borderColor: 'rgba(33,33,33,0.35)',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 5,
    width: BASE_WIDTH,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    height: 85,
    width: IMAGE_WIDTH,
  },
  pageCount: {
    fontSize: 10,
    textAlign: 'right',
    width: TEXT_WIDTH,
    position: 'absolute',
    bottom: 0,
  },
  synopsis: { fontSize: 12, textAlign: 'left', width: TEXT_WIDTH },
  textsContainer: { width: TEXT_WIDTH, paddingLeft: 20, paddingRight: 10, height: '80%' },
  title: { fontSize: 14, textAlign: 'left', fontWeight: 'bold', width: TEXT_WIDTH },
});
