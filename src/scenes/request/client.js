import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { ApplicationProvider, IconRegistry, Layout, Text, Icon, ListItem, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { theme, images, usersList } from "../../constant";
const { avatar, pendingImage } = images;
const { COLORS, FONTS, SIZES } = theme;

class Clients extends Component {

  state = {
    showModal: false
  }

  returnModalLayout = () => {
    const { showModal } = this.state;
    return (
      <Modal 
        isVisible={ showModal } 
        animationIn={ "slideInUp"} 
        backdropColor={'rgba(35, 52, 93, 0.8)'}
        backdropOpacity={1}
        onBackdropPress={() => this.setState({ showModal: false })} >
          <View 
            style={{ 
              maxHeight: 400,
              minHeight: 400,
              backgroundColor: COLORS.white, 
              padding: SIZES.padding * 1.3,
              borderRadius: SIZES.radius
            }}>
            <TouchableOpacity style={{ alignSelf: "flex-end"}} onPress={() => this.setState({ 
              showModal: !showModal 
              })
            }>
              <Ionicons name="close-outline" size={22} color={COLORS.color} />
            </TouchableOpacity>
           
          <Animatable.View 
            animation="slideInLeft" 
            > 
            <Text category="s2" style={{ fontFamily: FONTS.regular }}>
              By clicking proceed, Your request will be sent
            </Text>

            <View style={{ alignItems: 'center', justifyContent: 'center', width: 400, height: 180, marginVertical: SIZES.margin }}>
              <Image source={ pendingImage } resizeMode="contain" 
                style={{ height: '100%', width: '100%' }}
              />
            </View>

            <Button 
              onPress={() => {
                this.setState({ showModal: false });
                this.props.navigation.replace("Main")
              }}
              style={styles.btn}>
              <Text style={{ 
                  fontFamily: FONTS.bold, 
                  color: COLORS.white, 
                  fontSize: SIZES.h3
              }} category='s1'>
                  PROCEED
              </Text>
            </Button>
          </Animatable.View>
          </View>
        </Modal>
    )
    
  }

    render() {

      const { showModal } = this.state;

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


                      <View style={{marginTop: 30, flexDirection: 'row'}}>
                        <View style={ styles.searchContainer }>
                          <MaterialIcons name="search" size={25} color={COLORS.textPrimary} style={{marginLeft: 20}} />
                          <TextInput placeholder="Search for your favorite artisans" style={{ ...styles.input}} />
                          <MaterialIcons name="compare-arrows" size={25} color={COLORS.textPrimary} style={{marginRight: 20}} />
                        </View>
                      </View>

                      {showModal &&
                        <>
                          {this.returnModalLayout()}
                        </>
                      }

                      <View style={{ marginVertical: SIZES.margin }}>
                        <FlatList
                          style={{ marginVertical: SIZES.margin }}

                            data={usersList} 

                            renderItem={({ item, index }) => (
                                <ListItem
                                    onPress={() => {
                                      this.setState({ showModal: true })
                                    }}
                                    style={{ 
                                        borderRadius: SIZES.radius,
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
                                            fontSize: SIZES.font + 2,
                                            letterSpacing: .5,
                                        }}
                                        >
                                            {item.name}
                                        </Text>
                                    )}
                                    description={() => ( 
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: SIZES.margin / 2 }}>
                                          <Text 
                                            style={{ 
                                            color: COLORS.textPrimary, 
                                            fontFamily: FONTS.regular,
                                            fontSize: SIZES.font,
                                          }}
                                          >
                                            {item.text} {"\n"}
                                            { item.location }
                                          </Text>
                                          <Text 
                                            style={{ 
                                            color: item.status == "Available" ? COLORS.blue : COLORS.red, 
                                            fontFamily: FONTS.regular,
                                            fontSize: SIZES.font,
                                            fontWeight: '700'
                                          }}
                                          >
                                            Status: {item.status}
                                          </Text>
                                        </View>
                                    )}
                                    accessoryLeft={() => (
                                        <View style={{ 
                                            width: SIZES.margin * 5, 
                                            height: SIZES.margin * 5, 
                                            backgroundColor: "#f7f7f7",
                                            marginHorizontal: 10,
                                            borderRadius: 100, 
                                            alignItems: 'center', 
                                            justifyContent: 'center'
                                        }}>
                                        <Image source={ avatar } resizeMode="contain" 
                                          style={{height: 70, width: 70 }}
                                        />
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
                  </Animatable.View>
                </SafeAreaView>
              </ScrollView>
            </View>
          </ApplicationProvider>
        )
    }
}

export default Clients

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
      backgroundColor: "#ddd",
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