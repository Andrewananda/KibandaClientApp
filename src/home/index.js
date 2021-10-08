import React, {Component} from 'react';
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
              description: 'Fresh Meat with bons from Burma',
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
              title: 'Sunflower Oil',
              description: 'SunGold Sunflower Oil',
              amount: 'Kes 5258',
              imageUrl:
                'https://www.bidcoafrica.com/wp-content/uploads/2018/07/sunGoldProduct.png',
            },
            {
              title: 'Fresh fry cooking',
              description: 'Fresh fry cooking oil 10L',
              amount: 'Kes 2323',
              imageUrl:
                'https://images.yaoota.com/4ujaIQoPCfQlmd8mZrfjlzpnGCE=/trim/yaootaweb-production-ke/media/crawledproductimages/097474515656af2158b840e63cb10ba4430426c8.jpg',
            },
            {
              title: 'Salit vegetable cooking',
              description: 'Salit vegetable cooking oil 10L',
              amount: 'KSh 1879',
              imageUrl:
                'https://biasharaplace.co.ke/wp-content/uploads/2021/03/1-207.jpg',
            },
            {
              title: 'Nyota Vegetable Oil',
              description: 'Nyota Vegetable Oil - 20L',
              amount: 'KSh 3840',
              imageUrl:
                'https://www.mybigorder.com/public/uploads/products/meta/BY2upuoqELMcrYsuTZjvxVB6Gf00xgFy87EJMa1i.jpeg',
            },
            {
              title: 'Bahari Fry Cooking Oil',
              description: 'Bahari Fry Cooking Oil 10L',
              amount: 'KSh 1960',
              imageUrl:
                'https://www.beeqasi.co.ke/wp-content/uploads/2020/12/bahari-fry-20l-2.jpg',
            },
          ],
        },
        {
          screen: 'Flour And Sugar',
          data: [
            {
              title: 'Pembe All Purpose Flour',
              description: 'Pembe All Purpose Flour',
              amount: 'KSh 1650',
              imageUrl:
                'https://copia.co.ke/wp-content/uploads/2021/05/KF248_3290-6.jpg',
            },
            {
              title: 'Exe Mandazi - 2kg',
              description: 'Exe Mandazi - 2kg',
              amount: 'KSh 1749',
              imageUrl:
                'https://cdn.shopify.com/s/files/1/0412/0179/5233/products/510044_1200x1200.png',
            },
            {
              title: 'Ajab Home Baking Flour',
              description: 'Ajab Home Baking Flour',
              amount: 'KSh 1632',
              imageUrl:
                'https://jambopay.market/image/cache/catalog/Seller_146/Mahitaji%20/Ajab%20HB%202kg-20210625073420-500x484.png',
            },
            {
              title: 'Dola Home baking flour 2kgs',
              description: 'Dola Home baking flour 2kgs',
              amount: 'KSh 1630',
              imageUrl:
                'https://copia.co.ke/wp-content/uploads/2021/05/KF480_3061-1.jpg',
            },
            {
              title: 'Soko maize meal 2kg',
              description: 'Soko maize meal 2kg',
              amount: 'KSh 1180',
              imageUrl:
                'https://copia.co.ke/wp-content/uploads/2021/05/KF226_3093-8.jpg',
            },
          ],
        },
        {
          screen: 'Rice & Cereals',
          data: [
            {
              title: 'Mwea Pishori rice-25kgs',
              description: 'Mwea Pishori rice-25kgs',
              amount: 'KSh 3259',
              imageUrl:
                'https://goby-shops.fra1.digitaloceanspaces.com/tXA7QX2Uzhj6AMywKVdM.jpeg',
            },
            {
              title: 'Daawat Basmati Rice 5kgs',
              description: 'Daawat Basmati Rice 5kgs',
              amount: 'KSh 1269',
              imageUrl:
                'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/699621/1.jpg',
            },
            {
              title: 'Nyayo beans-1kgs',
              description: 'Nyayo beans-1kgs',
              amount: 'KSh 102',
              imageUrl:
                'https://dalima.co.ke/wp-content/uploads/2020/11/nyayo-beans.jpg',
            },
            {
              title: 'Njahi -1kg',
              description: 'Njahi -1kg',
              amount: 'KSh100',
              imageUrl: 'https://m.media-amazon.com/images/I/5158h44s8SL.jpg',
            },
            {
              title: 'Ndengu-1kg',
              description: 'Ndengu-1kg',
              amount: 'KSh 160',
              imageUrl:
                'https://jikomart.co.ke/site/wp-content/uploads/2019/01/western-ndengu.jpg',
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
              {props => (
                <StockItem
                  navigation={this.props.navigation}
                  data={item.data}
                />
              )}
            </Tab.Screen>
          );
        })}
      </Tab.Navigator>
    );
  }
}
