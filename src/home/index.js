import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../util/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import StockItem from './StockItem';

const Tab = createMaterialTopTabNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          screen: 'Meat & Fish',
          data: [
            {
              title: 'Fresh Meat with bons from Burma',
              description: '',
              amount: 'Kes 390',
              imageUrl:
                'https://cdn.pixabay.com/photo/2015/11/07/11/00/meat-1030729_1280.jpg',
            },
            {
              title: 'Fresh Meat without bons from Burma',
              description: 'boneless steak',
              amount: 'Kes 440',
              imageUrl:
                'https://cdn.pixabay.com/photo/2018/02/08/15/02/meat-3139641_1280.jpg',
            },
            {
              title: 'Fresh Tilapia fish from the lake',
              description: 'Tilapia size 3kg per kg',
              amount: 'Kes 400',
              imageUrl:
                'https://cdn.pixabay.com/photo/2017/07/24/21/37/fish-2536121_1280.jpg',
            },
            {
              title: 'Fresh Tilapia fish size 4Kg from the lake',
              description: 'Tilapia size 4kg per kg',
              amount: 'Kes 400',
              imageUrl:
                'https://cdn.pixabay.com/photo/2014/01/14/13/33/fish-market-244415_1280.jpg',
            },
            {
              title: 'Broiled chicken',
              description: 'Broiler chicken per piece 1.1kg and above',
              amount: 'Kes 390',
              imageUrl:
                'https://cdn.pixabay.com/photo/2010/12/10/08/chicken-1140_1280.jpg',
            },
          ],
        },
        {
          screen: 'Cooking Oil',
          data: [
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
          ],
        },
        {
          screen: 'Flour And Sugar',
          data: [
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
          ],
        },
        {
          screen: 'Vegetables',
          data: [
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
            {
              title: '',
              description: '',
              amount: '',
              imageUrl: '',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: colors.darkGray,
          labelStyle: {fontSize: moderateScale(12), fontWeight: 'bold'},
          indicatorStyle: {
            backgroundColor: colors.color_primary,
            height: '100%',
            borderBottomWidth: moderateScale(4),
            borderTopWidth: moderateScale(4),
            borderBottomColor: '#fff',
            borderTopColor: '#fff',
          },
          backBehavior: 'history',
          swipeVelocityImpact: 1.0,
          timingConfig: {
            duration: 0.1,
          },
          scrollEnabled: true,
        }}
        initialRouteName={'Meat & Fish'}>
        {this.state.data.map(item => {
          return (
            <Tab.Screen key={item.key} name={item.screen}>
              {props => <StockItem data={item.data} />}
            </Tab.Screen>
          );
        })}
      </Tab.Navigator>
    );
  }
}
