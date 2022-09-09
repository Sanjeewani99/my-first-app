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
    title: 'Life of Pi ',
    data: [
      {
        key: '1',
        text:'Author Name: Yann Martel                              Description: Life of Pi Paperback – Black & White    Price:500/=',
              
        uri: 'https://images-na.ssl-images-amazon.com/images/I/51rxEvLljUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      },
     
    ],
  },
  {
    title: 'The Three Musketeers Paperback',
    data: [
      {
        key: '1',
        text:'Author Name: Alexandre Dumas                                    Description: A historical Romance,                                Price:550/=',
              
        uri: 'https://images-na.ssl-images-amazon.com/images/I/41TxXqToCCL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      },
      
    ],
  },
  {
    title: 'The Call of the Wild',
    data: [
      {
        key: '1',
        text:'Author Name:  Jack London                         Description: short adventure novel by Jack London               Price:550/=',
        uri: 'https://images-na.ssl-images-amazon.com/images/I/41JNWeZqnsL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
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