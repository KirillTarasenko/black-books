import * as React from 'react';
import { View, FlatList, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SearchBar from 'react-native-dynamic-search-bar';

import Background from 'components/Background';
import BookItem from 'components/BookItem';
import Loading from 'components/Loading';

import { useBooksData } from './hooks';
import styles from './styles';

export function HomeScreen(): JSX.Element {
  const { handleClear, setFilterText, books, spinnerVisibility, loading } = useBooksData();
  const bookLen = books?.length;
  const renderBook = React.useCallback(({ item }) => <BookItem item={item} />, []);
  const keyExtractor = React.useCallback(item => item.id, []);

  return (
    <View style={styles.root}>
      <Background />
      <SearchBar
        placeholder="Search here"
        style={styles.search}
        spinnerVisibility={spinnerVisibility}
        onChangeText={setFilterText}
        onClearPress={handleClear}
      />
      {bookLen ? (
        <Animatable.View animation="fadeIn" delay={50}>
          <FlatList
            numColumns={1}
            renderItem={renderBook}
            data={books}
            style={styles.listStyle}
            contentContainerStyle={styles.container}
            keyExtractor={keyExtractor}
          />
        </Animatable.View>
      ) : (
        <View style={styles.progressView}>
          <Loading />
          {loading && <Text>Searching from API...</Text>}
          {!loading && (
            <Animatable.Text animation={'pulse'} iterationCount={'infinite'}>
              <Text>Nothing here =(</Text>
            </Animatable.Text>
          )}
        </View>
      )}
    </View>
  );
}
