import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../util/colors';
import Icon from '../util/Icon';
import {SimpleStepper} from 'react-native-simple-stepper';
import {bindActionCreators} from 'redux';
import {addCart} from '../redux/action';
import {connect} from 'react-redux';

class StockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItems: 0,
    };
  }

  valueChanged(value, item) {
    if (value > 0) {
      let newCount = this.state.numberOfItems + 1;
      this.setState({numberOfItems: newCount}, () => {
        this.props.addItem(item);
      });
    }
  }

  decrementCount = () => {
    let newCount = this.state.numberOfItems - 1;
    this.setState({numberOfItems: newCount});
  };

  renderItem = ({item}) => {
    return (
      <Card
        style={{
          margin: moderateScale(6),
          elevation: moderateScale(4),
          width: '98%',
        }}>
        <View style={{flexDirection: 'row'}}>
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
          <View
            style={{
              padding: moderateScale(10),
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: moderateScale(16),
                  width: moderateScale(160),
                }}>
                {item.title}
              </Text>
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
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <SimpleStepper
              decrementImageStyle={{width: 20, height: 20}}
              incrementImageStyle={{width: 20, height: 20}}
              valueChanged={value => this.valueChanged(value, item)}
              onDecrement={this.decrementCount}
              separatorStyle={{backgroundColor: colors.color_secondary}}
              initialValue={0}
              containerStyle={{
                backgroundColor: 'transparent',
                flexDirection: 'row',
                borderWidth: 2,
                borderRadius: 8,
                overflow: 'hidden',
                alignItems: 'center',
                borderColor: colors.color_secondary,
                marginRight: moderateScale(30),
              }}
              textStyle={{
                fontSize: moderateScale(12),
                fontWeight: 'bold',
                color: 'black',
              }}
              stepValue={1}
              maximumValue={100}
              showText={true}
            />
          </View>
        </View>
      </Card>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={this.props.data}
            renderItem={this.renderItem}
            ListEmptyComponent={() => (
              <View style={styles.noOrdersView}>
                <Text style={styles.noOrdersTxt}>No Stock Available</Text>
              </View>
            )}
          />
          {this.state.numberOfItems > 0 && (
            <View style={{backgroundColor: colors.color_secondary}}>
              <Pressable
                style={{
                  padding: moderateScale(20),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Cart');
                }}>
                <View>
                  <Text style={{color: colors.white}}>
                    Proceed to checkout {'(' + this.state.numberOfItems + ')'}
                  </Text>
                </View>
                <View>
                  <Icon
                    name={'greater-than'}
                    color={colors.white}
                    type={'MaterialCommunityIcons'}
                  />
                </View>
              </Pressable>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    itemCount: state.appState.count,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addItem: addCart,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StockItem);
