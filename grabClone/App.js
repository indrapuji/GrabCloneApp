import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={{backgroundColor: 'blue', flex: 1, marginTop: 25}}>
      <View style={{backgroundColor: 'red', flex: 1}} />
      <View
        style={{height: 59, backgroundColor: 'white', flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 24, height: 24, backgroundColor: '#ffffff'}}>
            <Image
              source={require('./assets/nav/home.png')}
              style={{width: 24, height: 24}}
            />
          </View>
          <Text style={{fontSize: 11, color: '#676767', marginTop: 8}}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 24, height: 24, backgroundColor: '#ffffff'}}>
            <Image
              source={require('./assets/nav/activity.png')}
              style={{width: 24, height: 24}}
            />
          </View>
          <Text style={{fontSize: 11, color: '#676767', marginTop: 8}}>
            Activity
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 24, height: 24, backgroundColor: '#ffffff'}}>
            <Image
              source={require('./assets/nav/payment.png')}
              style={{width: 24, height: 24}}
            />
          </View>
          <Text style={{fontSize: 11, color: '#676767', marginTop: 8}}>
            Payment
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 24, height: 24, backgroundColor: '#ffffff'}}>
            <Image
              source={require('./assets/nav/inbox.png')}
              style={{width: 24, height: 24}}
            />
          </View>
          <Text style={{fontSize: 11, color: '#676767', marginTop: 8}}>
            Inbox
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 24, height: 24, backgroundColor: '#ffffff'}}>
            <Image
              source={require('./assets/nav/account.png')}
              style={{width: 24, height: 24}}
            />
          </View>
          <Text style={{fontSize: 11, color: '#676767', marginTop: 8}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
