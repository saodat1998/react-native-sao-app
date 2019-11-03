import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncImageAnimated,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import styles from './styles';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.photo} source={require('../../../assets/icons/cookie100.png')} /> */}
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
