import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { ApplicationProvider, IconRegistry, Layout, Text, Icon, ListItem } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Row, Col } from 'react-native-responsive-grid-system';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { theme, images, pendingResult } from "../../constant";
const { walkthrough, pendingImage, completedImage } = images;
const { COLORS, FONTS, SIZES } = theme;

class PendingRequest extends Component {

    render() {
        return(
          <ApplicationProvider {...eva} mapping={eva.mapping} theme={eva.light}>
            <View style={styles.container}>
              <ScrollView>
                <SafeAreaView>
                  <View style={{ margin: SIZES.margin }}>

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

                      <View>
                      <Row>
                        <Col xs={12} sm={12} md={3} lg={3}>
                          <View onPress={() => this.props.navigation.navigate('Attendance', { screen: 'Clockin' },
                          )} style={{ ...styles.cardWrapper, backgroundColor: COLORS.black, padding: SIZES.padding }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                               <View style={{ ...styles.iconStyle }}>
                                <Ionicons name="star-outline" color={COLORS.white} size={ SIZES.h3 } />
                               </View>
                                <View style={{ marginLeft: SIZES.margin }}>
                                  <Text style={{...styles.gridText, color: COLORS.white, fontSize: SIZES.h3 }}>
                                    All Pending Request
                                  </Text>
                                  <Text 
                                    style={{ ...styles.gridText, 
                                    color: COLORS.textPrimary, 
                                    fontSize: SIZES.h2, 
                                    alignSelf: 'flex-start'
                                  }}>
                                    10
                                  </Text>
                                </View>
                              </View>
                          </View>
                        </Col>
                        </Row>
                      </View>

                      <View style={{ marginVertical: SIZES.margin, marginBottom: 100 }}>

                        <Text style={{ ...styles.gridText, fontSize: SIZES.h3, marginLeft: SIZES.margin / 2 }}>
                          Pending Request
                        </Text>

                        <FlatList
                                style={{ marginVertical: SIZES.margin }}

                                data={pendingResult} 

                                renderItem={({ item, index }) => (
                                    <ListItem
                                        // onPress={() => this.props.navigation.navigate('ContactDashboard', { item })}
                                        style={{ 
                                            backgroundColor: COLORS.white, 
                                            marginVertical: SIZES.margin / 3, 
                                            padding: 100,
                                        }}
                                        title={() => ( 
                                            <Text 
                                                style={{ 
                                                color: COLORS.black, 
                                                fontFamily: FONTS.bold,
                                                fontWeight: '600',
                                                fontSize: SIZES.font,
                                                letterSpacing: .5,
                                            }}
                                            >
                                                {item.title}
                                            </Text>
                                        )}
                                        description={() => ( 
                                            <Text 
                                                style={{ 
                                                color: COLORS.textPrimary, 
                                                fontFamily: FONTS.regular,
                                                fontSize: SIZES.font,
                                            }}
                                            >
                                                {item.text}
                                            </Text>
                                        )}
                                        accessoryLeft={() => (
                                            <View style={{ 
                                                width: SIZES.margin / 3, 
                                                height: SIZES.margin / 3, 
                                                backgroundColor: "#2B54E2",
                                                marginHorizontal: 10,
                                                borderRadius: 40, 
                                                alignItems: 'center', 
                                                justifyContent: 'center'
                                            }}>
                                            <Text 
                                                category="s2" 
                                                style={{ fontFamily: FONTS.bold, color: COLORS.white }}> 
                                                {/* { item.title.toUpperCase().substring(0, 2)} */}

                                            </Text>
                                        </View>
                                        )}
                                        accessoryRight={() => (
                                            <Text 
                                                style={{ 
                                                color: COLORS.blue, 
                                                fontFamily: FONTS.regular,
                                                fontSize: SIZES.font,
                                            }}
                                            >
                                                {/* { Moment(item['createdAt']).format("ll") } */}
                                            </Text>
                                        )}
                                    />
                                )}

                                keyExtractor={(item, index) => index.toString() }
                            />

                    </View>
                  </View>
                </SafeAreaView>
              </ScrollView>
            </View>
          </ApplicationProvider>
        )
    }
}

export default PendingRequest

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