import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MenuImage extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.headerButtonContainer} onPress={this.props.onPress}>
        {/* <Image
          style={styles.headerButtonImage}
          source={require('../../../assets/icons/menu.png')}
        /> */}
         <Icon name="bars" size={24} color="#fff"  style={styles.headerButtonImage}/>
      </TouchableOpacity>
    );
  }
}

MenuImage.propTypes = {
  onPress: PropTypes.func
};
