import { StyleSheet } from 'react-native';

import { FREE_SPACE_SIZE } from 'components/BookItem';

export default StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingHorizontal: FREE_SPACE_SIZE,
    alignItems: 'center',
  },
  listStyle: { marginTop: 20 },
  progressView: { height: 300, width: 300, marginTop: -150, alignItems: 'center' },
  root: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  search: { marginBottom: 10, position: 'absolute', top: 10 },
});
