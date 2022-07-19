import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import NewProductScreen from "../screens/NewProductScreen";
import MapScreen from "../screens/MapScreen";
import ProductListScreen from "../screens/ProductListScreen";
import colors from "../utils/colors";
import IonicIcons from '@expo/vector-icons/Ionicons';
import NewProductSreen from "../screens/NewProductScreen";

const Stack = createNativeStackNavigator();

const ProductNavigator = () => (
  <Stack.Navigator
    initialRouteName="Product"
    screenOptions={{
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? colors.primary : colors.secondary,
      },
      headerTintColor: Platform.OS === "android" ? colors.white : colors.black,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="Product"
      component={ProductListScreen}
      options={({navigation})=>({
        title:"Productos",
        headerRight:()=>(
          <TouchableOpacity onPress={()=>navigation.navigate("NewProduct")}>
            <IonicIcons 
              name="add-circle-outline"
              size={25}
              color= {colors.white}/>
          </TouchableOpacity>
        )
      })}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ title: "Detalle de Producto" }}
    />
    <Stack.Screen
      name="NewProduct"
      component={NewProductSreen}
      options={{ title: "Nuevo Producto" }}
    />
    <Stack.Screen
      name="Map"
      component={MapScreen}
      options={{ title: "Mapa" }}
    />
  </Stack.Navigator>
);

export default ProductNavigator;
