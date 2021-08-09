import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  textPrimary: "#7E7F9A",
  textBasic: '#DED5C5',
  border: "#7E7F9A",
  black: "#1E1F20",
  white: "#FFFFFF",
  gray: "#6A6A6A",
  blue: "#2B54E2",
  lightblue: '#158DED',
  white: "#FFFFFF",
  red: '#c9262d',
  light: '#F1F1F1',
  purple: '#8675F5',
  green: '#6FDBC2',
  orange: '#FF9A90',
  yellow: "#FFD037",
  color: "#000"
  

};

export const FONTS = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  italic: 'Poppins-Italic',
  light: 'Poppins-Light',
  black: 'Poppins-Black',
}

export const SIZES = {
  // global sizes
  base: 8,
  font: width < 361 ? 10 : 12,
  radius: 12,
  padding: 20,
  margin: 20,
  lineHeight: 20,

  // font sizes
  h1: width < 361 ? 26 : 30,
  h2: width < 361 ? 20 : 22,
  h3: width < 361 ? 14 : 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height
};


const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;