import React, {Component} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../util/colors';
import Icon from '../util/Icon';
import {SimpleStepper} from 'react-native-simple-stepper';
import {md5} from 'yarn/lib/cli';

export default class StockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  valueChanged(value) {
    this.setState({value: value + 1});
  }

  renderItem = ({item}) => {
    return (
      <Card
        style={{
          margin: moderateScale(6),
          elevation: moderateScale(4),
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
                  width: moderateScale(168),
                }}>
                {item.title}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  color: colors.darkGray,
                  width: moderateScale(168),
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
              valueChanged={value => this.valueChanged(value)}
              separatorStyle={{backgroundColor: colors.color_secondary}}
              containerStyle={{
                backgroundColor: 'transparent',
                flexDirection: 'row',
                borderWidth: 2,
                borderRadius: 8,
                overflow: 'hidden',
                alignItems: 'center',
                borderColor: colors.color_secondary,
              }}
              textStyle={{
                fontSize: moderateScale(12),
                fontWeight: 'bold',
                color: 'black',
              }}
              showText={true}
            />
            {/*<Icon*/}
            {/*  type={'Feather'}*/}
            {/*  size={24}*/}
            {/*  style={{*/}
            {/*    paddingRight: moderateScale(10),*/}
            {/*    paddingBottom: moderateScale(10),*/}
            {/*  }}*/}
            {/*  name={'plus'}*/}
            {/*/>*/}
          </View>
        </View>
      </Card>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        ListEmptyComponent={() => (
          <View style={styles.noOrdersView}>
            <Text style={styles.noOrdersTxt}>No Stock Available</Text>
          </View>
        )}
      />
    );
  }
}
