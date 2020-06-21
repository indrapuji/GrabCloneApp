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
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
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
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <View
              style={{
                height: 59,
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                marginRight: 1,
              }}>
              <Image
                source={require('./assets/home/logoOvo.png')}
                style={{height: 28, width: 28, left: 20}}
              />
              <Text
                style={{
                  position: 'absolute',
                  fontSize: 10,
                  color: '#ADADAD',
                  left: 55,
                  top: 20,
                }}>
                IDR
              </Text>
              <View />
              <Text style={{position: 'absolute', left: 73}}>100.000</Text>
              <Image
                source={require('./assets/home/next.png')}
                style={{position: 'absolute', height: 8, width: 8, left: 130}}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                height: 59,
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                marginLeft: 1,
              }}>
              <Image
                source={require('./assets/home/logoPoint.png')}
                style={{height: 28, width: 28, left: 20}}
              />
              <Text style={{position: 'absolute', left: 55}}>5000 Points</Text>
              <Image
                source={require('./assets/home/next.png')}
                style={{position: 'absolute', height: 8, width: 8, left: 137}}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: 8, backgroundColor: 'white'}}>
          <View style={{alignItems: 'center', paddingTop: 12}}>
            <View
              style={{
                height: 42,
                width: 154,
                borderWidth: 1,
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingHorizontal: 13,
              }}>
              <Image
                source={require('./assets/home/topup.png')}
                style={{width: 20, height: 20}}
              />
              <Text style={{fontWeight: 'bold'}}>Top Up</Text>
              <Text style={{fontWeight: 'bold', bottom: 4}}>.</Text>
              <Text>Wallet</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 26,
              marginTop: 29,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 15,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./assets/home/foodIcon.png')}
                  style={{width: 62, height: 62, marginBottom: 12}}
                />
                <Text>Food</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./assets/home/martIcon.png')}
                  style={{width: 62, height: 62, marginBottom: 12}}
                />
                <Text>Mart</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./assets/home/deliveryIcon.png')}
                  style={{width: 62, height: 62, marginBottom: 12}}
                />
                <Text>Delivery</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./assets/home/healthIcon.png')}
                  style={{width: 62, height: 62, marginBottom: 12}}
                />
                <Text>Health</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 20,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./assets/home/carIcon.png')}
                  style={{width: 62, height: 62, marginBottom: 12}}
                />
                <Text>Car</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./assets/home/bikeIcon.png')}
                  style={{width: 62, height: 62, marginBottom: 12}}
                />
                <Text>Bike</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./assets/home/groceriesIcon.png')}
                  style={{width: 62, height: 62, marginBottom: 12}}
                />
                <Text>Groceries</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./assets/home/moreIcon.png')}
                  style={{width: 62, height: 62, marginBottom: 12}}
                />
                <Text>More</Text>
              </View>
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
