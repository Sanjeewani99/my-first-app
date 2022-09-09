import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/pages/Home/Home";
import LogIn from "./src/pages/LogIn/LogIn";
import Register from "./src/pages/Register/Register";
import Dashboard from "./src/pages/Dashboard/Dashboard";
import CategoriesLists from "./src/pages/CategoriesLists/CategoriesLists";
import Search from "./src/pages/Search/Search";
import Action from "./src/pages/Action/Action";
import Historical from "./src/pages/Historical/Historical";
import Science from "./src/pages/Science/Science";
import Story from "./src/pages/Story/Story";
import Political from "./src/pages/Political/Political";
import Religion from "./src/pages/Religion/Religion";
import Novels from "./src/pages/Novels/Novels";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
     
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="LogIn" component={LogIn} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="CategoriesLists" component={CategoriesLists} />
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="Action" component={Action} />
        <Drawer.Screen name="Historical" component={Historical} />
        <Drawer.Screen name="Science" component={Science} />
        <Drawer.Screen name="Story" component={Story} />
        <Drawer.Screen name="Political" component={Political} />
        <Drawer.Screen name="Religion" component={Religion} />
        <Drawer.Screen name="Novels" component={Novels} />
     
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
