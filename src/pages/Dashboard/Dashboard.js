import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity,TextInput } from "react-native";

const Home = ({ navigation }) => {
  return (
  
    <View style={styles.container}>
      
      <View style={styles.carContainer}>
      <View style={styles.titles}>
         <Text style={styles.title}>TOWER OF HADES</Text>
         <Image source={{uri: 'https://ychef.files.bbci.co.uk/976x549/p03gg1lc.jpg'}}
       style={{width: 400, height: 400}} />

</View>
       
        <TouchableOpacity onPress={() => navigation.navigate("CategoriesLists")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>CATEGORIES LISTS</Text>  
          </View> 
        </TouchableOpacity> 
      </View>
    </View>  
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  text:{
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
    color: '#FFFFFF',
  },

  buttons: {
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor:"#306EFF",
    marginVertical:100,
    
    
  },

  carContainer: {
    width: "100%",
    height: "100%",
  },

  titles: {
    marginTop: "10%",
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  menu: {
    fontSize: 15,
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    
  },
});

export default Home;