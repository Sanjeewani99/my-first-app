import React from "react";
import { StyleSheet, Button, Text, View, ImageBackground,TextInput,TouchableOpacity,Image } from "react-native";


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titles}>
            <Text style={styles.title}>TOWER OF HADES</Text>
          
          
        </View>
          <Image source={{uri: 'https://www.thesecret.tv/wp-content/uploads/2020/04/icon-books-578x384.png'}}
       style={{width: 300, height: 200}} />
<Text style={styles.titles}>Create your account, It's free and only takes a minute.</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Full Name"
              placeholderTextColor="#003f5c"
              
            />
          </View>
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Last Name"
              placeholderTextColor="#003f5c"
              
            />
          </View>
     
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
        
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              placeholderTextColor="#003f5c"
             
            />
          </View>
          
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <View style={styles.loginBtn}> 
          <Text style={styles.loginText}>REGISTER</Text> 
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
      width: "60%",
      height: 40,
      marginBottom: 10,
      marginTop:20,
      alignItems: "Left",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 5,
      marginLeft: 5,
     
      
    },
    title: {
      fontSize: 30,
      fontWeight: "600",
    },
    
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 10,
      height: 50,
      width:150,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#9AFEFF",
    },
  });
export default Home;
