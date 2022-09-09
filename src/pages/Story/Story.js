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
    title: 'This Is How You Lose Her Paperback',
    data: [
      {
        key: '1',
        text:'Author Name: Junot Díaz                              Description: This Is How You Lose Her               Price:350/=',
              
        uri: 'https://m.media-amazon.com/images/P/1594631778.01._SCLZZZZZZZ_SX500_.jpg',
      },
     
    ],
  },
  {
    title: 'Florida Paperback',
    data: [
      {
        key: '1',
        text:'Author Name: Lauren Groff                        Description:In her vigorous and moving new book               Price:150/=',
              
        uri: 'data:image/jpeg;base64,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',
      },
      
    ],
  },
  {
    title: 'How Long til Black Future Month?',
    data: [
      {
        key: '1',
        text:'Author Name: N. K. Jemisin                            Description: Science fiction and fantasy short stories               Price:250/=',
              
        uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535169689l/40855636.jpg',
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