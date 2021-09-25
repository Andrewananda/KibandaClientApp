import React, {Component} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {colors} from '../util/colors';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  redirect(page) {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: page}],
      }),
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.color_primary,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{fontSize: 30, color: colors.white, alignSelf: 'center'}}>
            Kibanda App
          </Text>
          <Text
            style={{fontSize: 12, color: colors.white, alignSelf: 'center'}}>
            Make orders, we deliver
          </Text>
          <View>
            <ActivityIndicator
              size={24}
              color={colors.white}
              style={{marginTop: 20}}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
