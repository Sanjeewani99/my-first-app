import React from "react";
import { StyleSheet, Button, Text, View, ImageBackground,TextInput,TouchableOpacity,Image } from "react-native";


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
         <Text style={styles.title}>TOWER OF HADES</Text>
         
         
          <Image source={{uri: 'https://www.thesecret.tv/wp-content/uploads/2020/04/icon-books-578x384.png'}}
       style={{width: 300, height: 300}} />

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              
            />
          </View>
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
             
              
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
     
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <View style={styles.loginBtn}> 
          <Text style={styles.loginText}>LOGIN</Text> 
          </View> 
        </TouchableOpacity> 
          
        </View>
      );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#DCDCDC",
      alignItems: "center",
      justifyContent: "center",
      
    },
   
    image: {
        width: "50%",
        height: "50%",
        resizeMode: "cover",
        position: "absolute",
    },
   
    inputView: {
      backgroundColor: "#9AFEFF",
      borderRadius: 10,
      width: "70%",
      height: 45,
      marginBottom: 20,
      marginTop:20,
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    title: {
      fontSize: 30,
      fontWeight: "600",
    },
  
    
    loginBtn: {
      width: "80%",
      borderRadius: 10,
      height: 50,
      width:200,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#9AFEFF",
    },
  });
export default Home;
