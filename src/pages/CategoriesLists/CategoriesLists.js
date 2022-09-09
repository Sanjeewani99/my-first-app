import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity,TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
  
    <View style={styles.container}>
      <View style={styles.carContainer}>
      <View style={styles.titles}>
      
      <Image source={{uri: 'https://assets.ltkcontent.com/images/31018/book-genres_0066f46bde.jpg'}}
       style={{width: 300, height: 200}} />
       <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <View style={styles.butt}> 
          <Text style= {styles.text}>Search</Text>  
          </View> 
        </TouchableOpacity>
       
</View>

        <TouchableOpacity onPress={() => navigation.navigate("Action")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>ACTION & ADVENTURE</Text>  
          </View> 
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate("Historical")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>HISTORICAL FICTION</Text>  
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Science")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>SCIENCE FICTION </Text>  
          </View> 
          <TouchableOpacity onPress={() => navigation.navigate("Story")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>STORY BOOKS</Text>  
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Political")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>POLITICAL</Text>  
          </View> 
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Religion")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>RELIGION</Text>  
          </View> 
        </TouchableOpacity>
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={() => navigation.navigate("Novels")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>NOVELS</Text>  
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
    marginVertical:8,
  },
  butt: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 50,
    backgroundColor:"#4d5059",
    marginVertical:10,
    
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  design:{
    flexDirection: 'row',
    height: 35,
    width:"90%",
    margin: 10,
    borderWidth: 1,
    paddingRight:5,
    paddingLeft:5,
    backgroundColor:"#f4f4f4",
    borderRadius:8,
    borderColor:"black"
     
  },
  icon:{
    marginRight:10,
    marginTop:5,
    color:'#c4c3d0'
    
  },
  titles: {
    
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