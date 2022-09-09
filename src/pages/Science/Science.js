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
    title: 'The Testaments',
    data: [
      {
        key: '1',
        text:'Author Name: Margaret Atwood      Description: The Sequel to The Handmaid Tale Hardcover               Price:350/=',
              
        uri: 'https://m.media-amazon.com/images/P/0385543786.01._SCLZZZZZZZ_SX500_.jpg',
      },
     
    ],
  },
  {
    title: 'The Hunger Games Trilogy',
    data: [
      {
        key: '1',
        text:'Author Name: Suzanne Collins                    Description: Dystopia set in the small nation.              Price:600/=',
              
        uri: 'data:image/jpeg;base64,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',
      },
      
    ],
  },
  {
    title: '1984 Hardcover',
    data: [
      {
        key: '1',
        text:'Author Name: George Orwell      Description: The entire story, there is no room for hope               Price:1000/=',
              
        uri: 'https://images-na.ssl-images-amazon.com/images/I/31eAjJhD+zL._SX328_BO1,204,203,200_.jpg',
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