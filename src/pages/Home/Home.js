import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from "react-native";


const Home = ({ navigation }) => {
  return (
  
    <View style={styles.container}>
      <View style={styles.carContainer}>
      <View style={styles.titles}>
         
         <Text style={styles.title}>TOWER OF HADES</Text>
        <Image source={{uri: 'https://writerscentremedia.writerscentre.com.au/wp-content/uploads/2021/11/03122510/image38.jpg'}}
       style={{width: 300, height: 300}} />

</View>
       <View style={styles.titles}>
         
         <Text style={styles.menu}>WELCOME</Text>
   
       </View>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>LOGIN</Text>  
          </View> 
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>REGISTER</Text>  
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
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor:"#306EFF",
    marginVertical:10,
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