import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { ApplicationProvider, IconRegistry, Layout, Text, Icon, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Row, Col } from 'react-native-responsive-grid-system';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { theme, images } from "../../constant";
const { walkthrough, pendingImage, completedImage } = images;
const { COLORS, FONTS, SIZES } = theme;

class Request extends Component {

    render() {
        return(
          <ApplicationProvider {...eva} mapping={eva.mapping} theme={eva.light}>
            <View style={styles.container}>
              <ScrollView>
                <SafeAreaView>
                  <Animatable.View style={{ margin: SIZES.margin }}
                    animation="slideInLeft" 
                    >

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{ marginTop: SIZES.margin, flexDirection: 'row', alignItems: 'center' }}>
                          <View style={{ ...styles.iconStyle, backgroundColor: "#2B54E2" }}>
                            <Feather name="user" color={COLORS.white} size={ SIZES.h3 } />
                          </View>
                          <Text style={{ ...styles.header, marginLeft: SIZES.margin / 2 }}>
                            Hi, Ahmad!
                          </Text>
                        </View>
                        <TouchableOpacity>
                          <MaterialIcons name="more-vert" color={COLORS.black} size={ SIZES.h1 } />
                        </TouchableOpacity>
                      </View>

                    {/* <View style={{marginTop: 30, flexDirection: 'row'}}>
                      <View style={ styles.searchContainer }>
                        <MaterialIcons name="search" size={25} color={COLORS.textPrimary} style={{marginLeft: 20}} />
                        <TextInput placeholder="Search for your favorite food" style={{ ...styles.input}} />
                        <MaterialIcons name="compare-arrows" size={25} color={COLORS.textPrimary} style={{marginRight: 20}} />
                      </View>
                    </View> */}

                      <View style={{ marginVertical: SIZES.margin * 2, marginBottom: 100 }}>

                        <Text style={{ ...styles.gridText, fontSize: SIZES.h3 + 2, marginLeft: SIZES.margin / 2, marginBottom: SIZES.margin }}>
                          Choose A Category
                        </Text>

                        <Row>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate("Clients")
                            }} style={{ ...styles.grid }}>
                                <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textPrimary, 
                                marginLeft: SIZES.margin / 2
                                }}>
                                  <MaterialIcons name="category" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                <Text style={{...styles.gridText }}>
                                  Technician
                                </Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate("Clients")
                            }} style={{ ...styles.grid }}>
                                <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textBasic, 
                                marginLeft: SIZES.margin / 2
                                }}>
                                  <MaterialIcons name="category" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                <Text style={{...styles.gridText }}>
                                  Mechanics
                                </Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate("Clients")
                            }} style={{ ...styles.grid }}>
                                <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textPrimary, 
                                marginLeft: SIZES.margin / 2
                                }}>
                                  <MaterialIcons name="category" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                <Text style={{...styles.gridText }}>
                                  Plumber
                                </Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate("Clients")
                            }} style={{ ...styles.grid }}>
                                <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textBasic, 
                                marginLeft: SIZES.margin / 2
                                }}>
                                  <MaterialIcons name="category" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                <Text style={{...styles.gridText }}>
                                  Musician
                                </Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate("Clients")
                            }} style={{ ...styles.grid }}>
                                <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textBasic, 
                                marginLeft: SIZES.margin / 2
                                }}>
                                  <MaterialIcons name="category" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                <Text style={{...styles.gridText }}>
                                  Content Creator
                                </Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate("Clients")
                            }} style={{ ...styles.grid }}>
                                <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textPrimary, 
                                marginLeft: SIZES.margin / 2
                                }}>
                                  <MaterialIcons name="category" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                <Text style={{...styles.gridText }}>
                                  Physician
                                </Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate("Clients")
                            }} style={{ ...styles.grid }}>
                                <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textPrimary, 
                                marginLeft: SIZES.margin / 2
                                }}>
                                  <MaterialIcons name="category" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                <Text style={{...styles.gridText }}>
                                  Influencers
                                </Text>
                            </TouchableOpacity>
                          </Col>

                          <Col xs={6} sm={6} md={3} lg={3}>
                            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate("Clients")
                            }} style={{ ...styles.grid }}>
                                <View style={{ 
                                ...styles.iconStyleSecondary, 
                                backgroundColor: COLORS.textPrimary, 
                                marginLeft: SIZES.margin / 2
                                }}>
                                  <MaterialIcons name="category" color={COLORS.white} size={ SIZES.h3 } />
                                </View>
                                <Text style={{...styles.gridText }}>
                                  Developers
                                </Text>
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

export default Request

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
    },
    searchContainer: {
      height: 50,
      backgroundColor: COLORS.light,
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      fontSize: SIZES.font + 2,
      fontFamily: FONTS.medium,
      flex: 1,
      color: COLORS.dark,
    },
  });