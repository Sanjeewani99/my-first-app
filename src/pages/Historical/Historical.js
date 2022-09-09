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
    title: 'The Help Hardcover ',
    data: [
      {
        key: '1',
        text:'Author Name: Kathryn Stockett                              Description: The Help is not inspired by a true story   Price:500/=',
              
        uri: 'https://images-na.ssl-images-amazon.com/images/I/51c06W6w5bL.jpg',
      },
     
    ],
  },
  {
    title: 'One Hundred Years of Solitude',
    data: [
      {
        key: '1',
        text:'Author Name: Gabriel Garcia Marquez                                    Description: Memory and the past,                                Price:450/=',
              
        uri: 'https://m.media-amazon.com/images/P/0060883286.01._SCLZZZZZZZ_SX500_.jpg',
      },
      
    ],
  },
  {
    title: 'Memoirs of a Geisha',
    data: [
      {
        key: '1',
        text:'Author Name:  Arthur Golden                         Description: Many trials she faces on the path                Price:550/=',
        uri: 'https://images-na.ssl-images-amazon.com/images/I/51O9HqW8ZAL._SX322_BO1,204,203,200_.jpg',
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
    width: 100,
    height: 100,
    
  
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
    color:'black',
    textAlign:'right'
  },
});