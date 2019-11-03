import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories'
  };

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', { category, title });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        {/* <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} /> */}
        <View style={styles.row}>
          <View style={styles.iconContRight}>
            <Icon name="rocket" size={30} color="red" />
          </View>
          <View style={styles.iconContCenter}>
            <Text style={styles.categoriesName}>
              {item.name}
            </Text>
          </View>
          <View style={styles.iconBadge}>
            <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)}</Text>
          </View>
          <View style={styles.iconContLeft}>
            {/* <Ionicons name="md-arrow-right" size={32} color="red" style={styles.iconLeft} /> */}
            <Icon name="angle-right" size={30} color="red" />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
