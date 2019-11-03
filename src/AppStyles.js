import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 1;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT+10,
    borderColor: '#cccccc',
    borderWidth: 0,
    borderBottomWidth: 0.5,
  },
  photo: {
    // width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 10,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#444444',
    marginTop: 3,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  },
  col_1:{
    flexBasis: '30%',
    height: RECIPE_ITEM_HEIGHT,
  },
  col_2:{
    flexBasis: '70%',
    height: RECIPE_ITEM_HEIGHT,
    padding: 10,
  },
  row:{
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  }

});
