import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
//import { ListItem, Avatar } from 'react-native-elements'

//import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ArtistCard from "../components/Artists/ArtistCard.component";

export default function TabOneScreen() {

  const [query, setQuery] = useState('');
  const [artists, setArtists] = useState([]);


  useEffect(() => {
    setQuery(query);
  }, []);


  const searchArtists = async (e) => {
    e.preventDefault();
    const url = `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${query}&apikey=BJcS6XofWAMQPXIRlVEYPRFIWwjiAniM`;
  
    try {
        const res = await fetch(url);
        const data = await res.json();
        setArtists(data._embedded.attractions);
        console.log(data._embedded.attractions)
    } catch(err) {
        console.error(err)
    }
  }

  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search for an artist"
          value={query}
          onSubmitEditing={(e) => {
            searchArtists(e);
          }}
          onChangeText={(text) => {
            setQuery(text);
          }}
        />
      </View>
      <View style={styles.container}>
        <ScrollView>
        {
          artists.map((art) => (
            <ArtistCard key={art.id} artist={art} />
          ))
        }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  search: {
    marginTop: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
