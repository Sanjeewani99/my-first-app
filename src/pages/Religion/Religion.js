import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
  return (
    
    <View style={styles.item}>
       
       <Text style={styles.itemText}>{item.text}</Text>
      
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
     
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Big Ideas Simply Explained',
    data: [
      {
        key: '1',
        text:'Author Name: DK                                             Description: Big Ideas Simply Explained series               Price:150/=',
              
        uri: 'https://images-na.ssl-images-amazon.com/images/I/519U4ew0EXL._SX418_BO1,204,203,200_.jpg',
      },
     
    ],
  },
  {
    title: 'Tipitaka',
    data: [
      {
        key: '1',
        text:'Author Name:   Harivarman                                Description: Certain dietary rules,dress code                Price:150/=',
              
        uri: 'https://www.worldatlas.com/r/w960-q80/upload/67/3a/b5/shutterstock-413882605.jpg',
      },
      
    ],
  },
  
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
    
  },
  item: {
    margin: 10,
    
  },
  itemPhoto: {
    width: 200,
    height: 200,
    
  
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
    color:'black',
    textAlign:'right'
  },
});