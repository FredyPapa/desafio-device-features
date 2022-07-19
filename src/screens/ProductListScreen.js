import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import {useSelector} from "react-redux";
import ProductItem from "../components/ProductItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer:{
    marginVertical:20,
    alignItems:"center",
    justifyContent:"center",
  }
});

const ProductListScreen = ({ navigation }) => {
  const products = useSelector((state)=>state.product.products);
  const onSelectProduct =(id)=>{
    navigation.navigate("ProductDetail",{productId:id});
  }
  const renderItem=({item})=>(
    <ProductItem {...item} description="Descripción del producto" onSelect={onSelectProduct} />
  )

  const ListEmptyComponent=()=>(
    <View style={styles.emptyContainer}>
      <Text>No hay productos registrados</Text>
    </View>
  )

  return (
    <FlatList
      style={styles.container}
      data={products}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default ProductListScreen;
