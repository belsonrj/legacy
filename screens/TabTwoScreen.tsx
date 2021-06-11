import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import { View } from '../components/Themed';
import VenueCard from "../components/Venues/VenueCard.component";
//setlist.fm API 	zwe-3YoQa6EGhRZWA8ydeWRcRR-F-QUX2LOo

export default function TabTwoScreen() {

  const [query, setQuery] = useState('');
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    setQuery(query);
  }, []);

  const searchVenues = async (e) => {
    e.preventDefault();
    const url = `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${query}&apikey=BJcS6XofWAMQPXIRlVEYPRFIWwjiAniM`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        setVenues(data._embedded.venues);
        console.log(data._embedded.venues)
    } catch(err) {
        console.error(err)
    }
}

  return (
    <SafeAreaView style={styles.outer}>
        <Searchbar
          style={styles.search}
          placeholder="Search for a venue"
          value={query}
          onSubmitEditing={(e) => {
            searchVenues(e);
          }}
          onChangeText={(text) => {
            setQuery(text);
          }}
        />
      <View style={styles.container}>
      <ScrollView>
      {
          venues.map((ven) => (
            <VenueCard key={ven.id} venue={ven} />
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
