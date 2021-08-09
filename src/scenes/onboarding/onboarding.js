import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { theme, slides } from "../../constant";
import * as Animatable from 'react-native-animatable';
import AppIntroSlider from 'react-native-app-intro-slider';
const { COLORS, FONTS, SIZES } = theme;

export default class Onboarding extends Component {

  state = {
    showRealApp: false
  }

  _renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.wrapper}>
          <View style={styles.imageWrap}>
              <Image source={ item.image } 
                resizeMode="contain" 
                style={styles.image}
              />
          </View>
          <Animatable.View 
            animation="slideInDown" 
            >
            <Text category="s2"
              style={{ 
                  ...styles.titleStyle
                }}>
                { item.title }
            </Text>
            <Text category="s2"
              style={{ 
                  ...styles.textStyle
                }}>
                { item.text }
            </Text>
          </Animatable.View>
        </View>
      </View>
    );
  }
  _onDone = () => {
    this.props.navigation.replace('Auth')
  }
  
    render() {

          return (
            <View style={styles.container}>
              {/* <View style={styles.appLogo}>
                  <AppLogo />
              </View> */}
              <AppIntroSlider 
                renderItem={this._renderItem} 
                data={slides} 
                onDone={this._onDone}
                dotStyle={{backgroundColor: COLORS.blue, height: 9, width: 9, borderRadius: 9 }}
                activeDotStyle={{backgroundColor: COLORS.textPrimary, height: 11, width: 11, borderRadius: 11}}
                doneLabel="Get Started"
                showSkipButton
                renderNextButton={() => (
                  <View 
                  style={{
                    marginHorizontal: 20, backgroundColor: COLORS.blue,
                    paddingVertical: SIZES.padding / 2,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: SIZES.radius / 2,
                    }}>
                    <Text category="s1" 
                    style={{ 
                      fontFamily: FONTS.regular ,
                      color: COLORS.white,
                      fontWeight: '600',
                    }}>NEXT</Text>
                  </View>
                )}
                renderSkipButton={() => (
                  <View style={{ 
                    marginHorizontal: 20, backgroundColor: 'transparent',
                    paddingVertical: SIZES.padding / 2,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: SIZES.radius / 2,
                   }}>
                    <Text category="s1" 
                    style={{ 
                      fontFamily: FONTS.regular, 
                      color: COLORS.blue,
                      fontWeight: '600'
                    }}>SKIP</Text>
                  </View>
                )}
                renderDoneButton={() => (
                  <View style={{ 
                    marginHorizontal: 20,
                    marginHorizontal: 20, backgroundColor: COLORS.blue,
                    paddingVertical: SIZES.padding / 2,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: SIZES.radius / 2,
                  }}>
                    <Text category="s1" style={{ 
                      fontFamily: FONTS.regular ,
                      color: COLORS.white,
                      fontWeight: '600',
                    }}>GET STARTED</Text>
                  </View>
                )}
              />
            </View>
          )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    appLogo: {
      marginVertical: SIZES.margin,
      alignItems: 'center',
    },
    wrapper: {
      marginHorizontal: SIZES.margin,
    },
    imageWrap: {
      width: '100%',
      height: SIZES.height / 1.8,
    },
    image: {
      width: '100%',
      height: '100%'
    },
    btn: {
      marginVertical: SIZES.margin * 2,
      backgroundColor: '#158DED',
      borderColor: '#158DED',
      fontFamily: FONTS.medium
    },
    textStyle: {
      fontSize: SIZES.h4, 
      color: COLORS.textPrimary,
      fontFamily: FONTS.medium,
      marginTop: SIZES.margin,
      paddingHorizontal: SIZES.padding * 1.3,
      lineHeight: SIZES.margin * 1.2
    },
    titleStyle: {
      fontSize: SIZES.h2, 
      color: COLORS.black,
      fontFamily: FONTS.bold,
      fontWeight: '800',
      paddingHorizontal: SIZES.padding * 1.3,
      // textAlign: 'center',
    }
  });