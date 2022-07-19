import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ProductDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ProductDetailScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;
