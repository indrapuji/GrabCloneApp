import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1}}>
          <View
            style={{
              paddingBottom: 13,
              paddingHorizontal: 13,
              paddingTop: 38,
              backgroundColor: '#34C072',
            }}>
            <View style={{position: 'relative'}}>
              <TextInput
                placeholder="Offers, food, and place to go"
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  fontSize: 15,
                  borderColor: '#3FAB70',
                  paddingLeft: 98,
                  paddingRight: 20,
                  backgroundColor: 'white',
                }}
              />
              <Image
                source={require('./assets/home/magnifying.png')}
                style={{
                  position: 'absolute',
                  height: 15,
                  width: 15,
                  top: 13,
                  left: 75,
                }}
              />
              <Image
                source={require('./assets/home/scan.png')}
                style={{
                  position: 'absolute',
                  width: 38,
                  height: 38,
                  backgroundColor: '#F7F7F7',
                  top: 1,
                  left: 1,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
