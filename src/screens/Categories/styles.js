import { StyleSheet } from 'react-native';
const ICONSIDE = 10;

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    borderColor: '#cccccc',
    borderWidth: 0,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  
  categoriesName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#333333',
    marginTop: 5,
  },
  categoriesInfo: {
    backgroundColor: '#eaeaea',
    width: 24,
    height: 24,
    borderRadius: 24/2,
    textAlign:'center',
    alignContent: 'center',
    lineHeight: 16,
    fontSize: 14,
    fontWeight: '400',
    padding: 5,
    marginTop: 5,
  },
  iconContRight:{
    flexBasis: ICONSIDE+'%',
  },
  iconContLeft:{
    textAlign:'right',
    flexBasis: ICONSIDE+'%',
  }, 
  iconBadge:{
    flexBasis: ICONSIDE+'%',
  },
  iconContCenter:{
    textAlign:'right',
    flexBasis: (100 - 3*ICONSIDE)+'%',
  },  
  row:{
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  }
});

export default styles;
