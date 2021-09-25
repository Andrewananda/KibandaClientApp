import React, {Component} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../util/colors';
import Icon from '../util/Icon';

export default class StockItem extends Component {
  constructor(props) {
    super(props);
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
                  width: moderateScale(220),
                }}>
                {item.title}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  color: colors.darkGray,
                  width: moderateScale(200),
                }}>
                {item.description}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: moderateScale(15),
                  fontWeight: 'bold',
                  color: colors.darkGray,
                }}>
                {item.amount}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingRight: moderateScale(20),
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <Icon
              type={'Feather'}
              size={24}
              style={{
                paddingRight: moderateScale(10),
                paddingBottom: moderateScale(10),
              }}
              name={'plus'}
            />
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
