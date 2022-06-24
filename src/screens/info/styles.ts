import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  authorText: { fontSize: 12, fontWeight: 'bold', marginTop: 5 },
  extraInfoBlock: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 200,
  },
  leftExtraBlock: { justifyContent: 'flex-start' },
  rightExtraBlock: { alignItems: 'flex-end' },
  root: { flex: 1 },
  rootContent: { alignItems: 'center', paddingTop: 20, paddingHorizontal: 15, paddingBottom: 30 },
  smallText: { fontSize: 12, marginTop: 5 },
  synopsis: { fontSize: 12, marginTop: 10, marginBottom: 5 },
});
