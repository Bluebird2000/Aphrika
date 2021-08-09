import React, { Component } from'react';
import { 
    ImageBackground,
    Animated, 
    Easing, 
    Text, 
    View, 
    Dimensions, 
    Image
} from'react-native';
const { width, height } = Dimensions.get("window");

class Splash extends Component {
 
    constructor(props){
        super(props);
        this.spinValue = new Animated.Value(0);
    }
    
    async componentDidMount() {
        this.spin();
        this.props.navigation.replace("Onboarding")
    }

    spin () {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, { 
            toValue: 1, 
            duration: 5000,
            easing: Easing.linear, 
            useNativeDriver: true
        }).start(() => this.spin() )
    }
    
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
      })
    return (
      // <ImageBackground
      //   source={require('../../assets/images/splash.png')}
      //   resizeMode='cover'
      //   style={{ flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center', height: height / 1.5}}>
          <Text>Loading...</Text>
            {/* <Image source={require('../../assets/images/logo-transparent.png')} resizeMode="contain" style={{height: 300, width: 300}} /> */}
        </View>
      // </ImageBackground>
    );
  }
}

export default Splash;