import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';


export default function VenueCard({ venue }) {
    console.log(venue)
    
    const [expanded, setExpanded] = useState(false)
    //const handlePress = () => setExpanded(expanded);

    return (
        <View>
            <ListItem bottomDivider>
                
                <ListItem.Content>
                    <ListItem.Title>{venue.name}</ListItem.Title>
                    <Text>{(venue.address) ? venue.address.line1 : ''} {venue.city.name}, {venue.country.countryCode} {venue.postalCode}</Text>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}
