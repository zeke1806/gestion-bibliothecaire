import { StyleSheet } from "react-native";

export const colors = {
  primary: "#45c6ed",
  secondary: "#e00794",
};

export const space = 15;

export const styles = StyleSheet.create({
  elevation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

const themes = {
  colors,
  space,
  ...styles,
};

export default themes;
