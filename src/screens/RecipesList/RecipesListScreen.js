import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';

export default class RecipesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    };
  };

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col_1}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
          </View>
          <View style={styles.col_2}>
            <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('category');
    const recipesArray = getRecipes(item.id);
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipesArray}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}