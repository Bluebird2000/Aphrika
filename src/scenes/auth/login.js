import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { ApplicationProvider, IconRegistry, Layout, Text, Icon, Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { Formik } from 'formik';
import { loginValidation } from '../../helper/schema';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { theme, images } from "../../constant";
const { COLORS, FONTS, SIZES } = theme;

class Login extends Component {

    render() {
        return(
          <ApplicationProvider {...eva} mapping={eva.mapping} theme={eva.light}>
                <View style={styles.container}>
                    <ScrollView>
                    <SafeAreaView>
                        <View style={{ margin: SIZES.margin * 2 }}>

                            <View style={{ marginTop: SIZES.margin * 3 }}>
                                <Text style={{
                                    ...styles.header
                                    }}>
                                    Let's sign you in.
                                </Text>
                                <Text
                                  style={{
                                    ...styles.welcome
                                  }}
                                >
                                  Welcome back, I'm so happy to see you, you can continue to login to manage your finder
                                </Text>
                            </View>
                        </View>
                    <View style={{ }}>
                        <View style={{ ...styles.wrapper, }}>

                        {/* <View style={{ width: '100%', height: 200, alignItems: 'center' }}>
                          <Image source={ images.loginimage } 
                            resizeMode="contain" 
                            style={styles.image}
                          />
                        </View> */}

                            <KeyboardAwareScrollView>
                            <Formik
                              validateOnMount={true}
                              validationSchema={ loginValidation }
                              initialValues={{ email: '', password: '' }}
                              onSubmit={values => {
                                  this.props.navigation.replace('Main');
                                  // this.onInit(values);
                              }}
                            >   
                            {({
                              handleChange,
                              handleSubmit,
                              values,
                              setFieldTouched,
                              errors,
                              touched,
                              }) => (

                              <>
                                <View>
                                  <Text style={{
                                      marginBottom: SIZES.margin / 2,
                                      fontSize: SIZES.font + 2, 
                                      color: COLORS.textPrimary,
                                      fontFamily: FONTS.medium
                                      }}>
                                          Email Address
                                  </Text>
                                  <TextInput style={styles.input}
                                    value={values.email}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "email@example.com"
                                    placeholderTextColor = {COLORS.textPrimary}
                                    autoCapitalize = "none"
                                    onBlur={() => setFieldTouched('email')}
                                    onChangeText={handleChange('email')}
                                  />

                                  {(errors.email && touched.email) &&
                                    <Text style={styles.validationText}>
                                      {errors.email}
                                    </Text>
                                  }
                                </View>

                                <View style={{ marginVertical: SIZES.margin * 1.8}}>
                                  <Text style={{
                                      marginBottom: SIZES.margin / 2,
                                      fontSize: SIZES.font + 2, 
                                      color: COLORS.textPrimary,
                                      fontFamily: FONTS.medium
                                      }}>
                                        Password
                                  </Text>
                                  <TextInput style={styles.input}
                                    value={values.password}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "*********"
                                    placeholderTextColor = {COLORS.textPrimary}
                                    autoCapitalize = "none"
                                    secureTextEntry
                                    onBlur={() => setFieldTouched('password')}
                                    onChangeText={handleChange('password')}
                                  />

                                  {(errors.password && touched.password) &&
                                    <Text style={styles.validationText}>
                                      {errors.password}
                                    </Text>
                                  }
                                </View>

                                <Button 
                                  onPress={handleSubmit}
                                  style={styles.btn}>
                                  <Text style={{ 
                                      fontFamily: FONTS.bold, 
                                      color: COLORS.white, 
                                      fontSize: SIZES.h3
                                  }} category='s1'>
                                      LOGIN
                                  </Text>
                              </Button>
                              </>
                            )}
                            </Formik>

                            <TouchableOpacity 
                                // onPress={() => this.props.navigation.navigate("Register")} 
                                >
                                <Text style={{
                                    marginVertical: SIZES.margin,
                                    fontSize: SIZES.font + 2, 
                                    color: COLORS.textPrimary,
                                    fontFamily: FONTS.medium,
                                    textAlign: 'center'
                                    }}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </KeyboardAwareScrollView>
                        </View>
                    </View>
                </SafeAreaView>
              </ScrollView>
            </View>
          </ApplicationProvider>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    appLogo: {
      marginVertical: 10,
      alignItems: 'center',
    },
    wrapper: {
      marginHorizontal: SIZES.margin * 2,
    },

    input: {
        height: 45,
        fontFamily: FONTS.medium,
        padding: SIZES.padding / 2,
        borderColor: COLORS.border,
        borderRadius: SIZES.radius / 2,
        borderWidth: 1,
        fontSize: SIZES.font + 2, 
        color: COLORS.textPrimary
    },

    header: {
      fontSize: SIZES.h2, 
      color: COLORS.black,
      fontFamily: FONTS.bold,
      fontWeight: '800' 
    },

    welcome: {
      marginVertical: SIZES.margin,
      fontSize: SIZES.h4, 
      color: COLORS.textPrimary,
      fontFamily: FONTS.bold,
      fontWeight: '600',
      lineHeight: SIZES.padding * 1.2,
    },
     
    validationText: {
        marginTop: 5,
        fontSize: SIZES.font,
        color: COLORS.red,
        fontFamily: FONTS.medium
    },

    icon: {
        width: SIZES.width / 12,
        height: SIZES.width / 12,
    },

    image: {
      width: '100%',
      height: '100%'
    },

    btn: {
      marginTop: SIZES.margin * 4,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: SIZES.radius / 2,
      marginVertical: SIZES.margin * 2,
      backgroundColor: COLORS.blue,
      fontFamily: FONTS.medium,
      borderColor: COLORS.blue,
    }
  });