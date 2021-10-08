import React, {Component} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import {connect} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../util/colors';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  renderItems = ({item}) => {
    return (
      <Card
        style={{
          elevation: moderateScale(0),
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={{
              width: moderateScale(100),
              height: moderateScale(100),
              padding: moderateScale(5),
            }}>
            <Image
              source={{uri: item.imageUrl}}
              resizeMode={'cover'}
              style={{
                width: moderateScale(100),
                height: moderateScale(90),
                padding: moderateScale(10),
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: moderateScale(14),
                color: colors.darkGray,
                width: moderateScale(160),
              }}>
              {item.description}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: moderateScale(15),
                fontWeight: 'bold',
                color: colors.amountColor,
              }}>
              {item.amount}
            </Text>
          </View>
        </View>
        <View style={{width: '100%', borderWidth: 1, borderColor: '#c0c0c0'}} />
      </Card>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, alignContent: 'center'}}>
          <FlatList data={this.props.items} renderItem={this.renderItems} />
          <Pressable
            style={{
              backgroundColor: colors.color_primary,
              elevation: moderateScale(4),
              borderRadius: moderateScale(10),
              height: moderateScale(40),
              width: moderateScale(150),
              padding: moderateScale(10),
              bottom: moderateScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            onPress={() => alert('Coming Soon')}>
            <Text
              style={{
                textAlign: 'center',
                color: colors.white,
                fontSize: moderateScale(16),
              }}>
              Confirm Order
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.appState.cartItems,
  };
}

export default connect(mapStateToProps, null)(Cart);
