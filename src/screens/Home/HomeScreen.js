import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'left',
      alignSelf: 'center',
      flex: 1,
      color: '#fff',
    },
    headerStyle: {
      height: 50,
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 5,
      backgroundColor: 'red',
      color: '#fff'
    },
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

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
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
