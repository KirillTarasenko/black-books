import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import Background from 'components/Background';
import CachedImage from 'components/CachedImage';
import { IBook } from 'interfaces/api/books';

import styles from './styles';

type IProps = {
  navigation: any;
  route: { params: { item: IBook } };
};
export function InfoScreen({ navigation, route }: IProps): JSX.Element {
  const { item } = route.params;
  const { title, coverImageUrl, pageCount, publisher, synopsis, author, id } = item;
  navigation.setOptions({ title: title + '' });
  return (
    <>
      <Background />
      <ScrollView style={styles.root} contentContainerStyle={styles.rootContent}>
        <SharedElement id={`item.${id}.photo`}>
          <CachedImage previewUrl={coverImageUrl} resizeMode={'cover'} style={styles.image} />
        </SharedElement>
        <Text style={styles.synopsis}>{synopsis}</Text>
        <View style={styles.extraInfoBlock}>
          <View style={styles.leftExtraBlock}>
            <Text numberOfLines={1} style={styles.smallText}>
              {`Publisher: ${publisher}`}
            </Text>
            <Text numberOfLines={1} style={styles.smallText}>
              {`Pages: ${pageCount}`}
            </Text>
          </View>
          <View style={styles.rightExtraBlock}>
            <Text numberOfLines={1} style={styles.smallText}>
              {'Author'}
            </Text>
            <Text numberOfLines={1} style={styles.authorText}>
              {`${author}`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
