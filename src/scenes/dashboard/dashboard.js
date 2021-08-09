import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { ApplicationProvider, IconRegistry, Layout, Text, Icon, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Row, Col } from 'react-native-responsive-grid-system';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { theme, images } from "../../constant";
const { walkthrough, pendingImage, completedImage } = images;
const { COLORS, FONTS, SIZES } = theme;

class Dashboard extends Component {

    render() {

        return(
          <ApplicationProvider {...eva} mapping={eva.mapping} theme={eva.light}>
            <View style={styles.container}>
              <ScrollView>
                <SafeAreaView>
                  <Animatable.View style={{ margin: SIZES.margin }}
                    animation="slideInDown" 
                    >
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{ marginTop: SIZES.margin, flexDirection: 'row', alignItems: 'center' }}>
                          <View style={{ ...styles.iconStyle, backgroundColor: "#2B54E2" }}>
                            <Feather name="user" color={COLORS.white} size={ SIZES.h3 } />
                          </View>
                          <Text style={{ ...styles.header, marginLeft: SIZES.margin / 2 }}>
                            Hi, XL Africa!
                          </Text>
                        </View>
                        <TouchableOpacity>
                          <MaterialIcons name="more-vert" color={COLORS.black} size={ SIZES.h1 } />
                        </TouchableOpacity>
                      </View>

                      <View>
                      <Row>
                        <Col xs={12} sm={12} md={3} lg={3}>
                          <View onPress={() => this.props.navigation.navigate('Attendance', { screen: 'Clockin' },
                          )} style={{ ...styles.cardWrapper, backgroundColor: COLORS.black, padding: SIZES.padding }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                               <View style={{ ...styles.iconStyle }}>
                                <Ionicons name="star-outline" color={COLORS.white} size={ SIZES.h3 } />
                               </View>
                                <View>
                                  <Text style={{...styles.gridText, color: COLORS.white, fontSize: SIZES.h3 }}>
                                    XL Africa Group
                                  </Text>
                                  <Text style={{...styles.gridText, color: COLORS.textPrimary, fontSize: SIZES.h4, alignSelf: 'flex-start' }}>
                                    Get unlimited access to all {"\n"} our features!
                                  </Text>
                                </View>
                                <View style={{ ...styles.iconStyle, }}>
                                  <Ionicons name="star-outline" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                {/* <Ionicons name="star-outline" color={COLORS.white} size={ SIZES.h3 } /> */}
                              </View>
                          </View>
                        </Col>
                        </Row>
                      </View>

                      <View style={{ marginVertical: SIZES.margin, marginBottom: 100 }}>

                        <Text style={{ ...styles.gridText, fontSize: SIZES.h3 + 2, marginLeft: SIZES.margin / 2 }}>
                          Activities
                        </Text>

                        <Row>
                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PendingRequest')} style={{ ...styles.grid }}>
                              {/* <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textBasic, 
                                alignSelf: 'flex-start',
                                marginLeft: SIZES.margin / 2
                              }}>
                                <Feather name="user" color={COLORS.white} size={ SIZES.h3 } />
                              </View> */}
                                <Image source={walkthrough} resizeMode="contain" 
                                style={{height: 100, width: 100}}
                                />
                                <Text style={{...styles.gridText }}>
                                  All Request
                                </Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {

                              this.props.navigation.navigate("PendingRequest")

                            }} style={{ ...styles.grid }}>
                                {/* <View style={{ 
                                  ...styles.iconStyleSecondary, 
                                  backgroundColor: "#2B54E2", 
                                  alignSelf: 'flex-start',
                                  marginLeft: SIZES.margin / 2
                                }}>
                                  <Feather name="user" color={COLORS.white} size={ SIZES.h3 } />
                                </View> */}
                                <Image source={ pendingImage } resizeMode="contain" 
                                style={{height: 100, width: 100}}
                                />
                                <Text style={{...styles.gridText }}>
                                  Pending</Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PendingRequest')} style={{ ...styles.grid }}>
                                <Image source={walkthrough} resizeMode="contain" 
                                style={{height: 100, width: 100}}
                                />
                                <Text style={{...styles.gridText }}>
                                  Declined</Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity 
                              onPress={() => this.props.navigation.navigate('PendingRequest')} style={{ ...styles.grid }}>
                                <Image source={completedImage} resizeMode="contain" 
                                style={{height: 100, width: 100}}
                                />
                                <Text style={{...styles.gridText }}>
                                  Completed</Text>
                            </TouchableOpacity>
                          </Col>
                        </Row>
                    </View>
                  </Animatable.View>
                </SafeAreaView>
              </ScrollView>
            </View>
          </ApplicationProvider>
        )
    }
}

export default Dashboard

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

    icon: {
        width: SIZES.width / 12,
        height: SIZES.width / 12,
    },

    image: {
      width: '100%',
      height: '100%'
    },

    header: {
      fontSize: SIZES.h3 + 2, 
      color: COLORS.black,
      fontFamily: FONTS.bold,
      fontWeight: '800' 
    },

    welcome: {
      marginVertical: SIZES.margin / 2,
      fontSize: SIZES.h3, 
      color: COLORS.textPrimary,
      fontFamily: FONTS.bold,
      fontWeight: '600',
      lineHeight: SIZES.padding * 1.5,
    },

    cardWrapper: {
      backgroundColor: COLORS.white,
      marginTop: SIZES.margin,
      margin: SIZES.margin / 3,
      paddingVertical: SIZES.padding,
      borderRadius: SIZES.radius
    },

    grid: {
      backgroundColor: COLORS.white,
      margin: SIZES.margin / 3,
      alignItems: 'center',
      paddingVertical: SIZES.padding,
      borderRadius: SIZES.radius
    },
    gridText: {
      marginVertical: SIZES.margin / 2,
      fontSize: SIZES.h4, 
      color: COLORS.color,
      fontWeight: '600',
      fontFamily: FONTS.medium,
    },
    iconStyle: {
      width: 40, 
      height: 40, 
      borderRadius: 40, 
      backgroundColor: COLORS.textPrimary, 
      justifyContent: 'center', 
      alignItems: 'center'
    },

    iconStyleSecondary: {
      width: 30, 
      height: 30, 
      borderRadius: 30, 
      backgroundColor: COLORS.textPrimary, 
      justifyContent: 'center', 
      alignItems: 'center'
    }
  });