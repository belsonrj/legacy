import React from 'react';
import { View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';


export default function ArtistCard({ artist }) {
    console.log(artist.classifications)
    
    //const [expanded, setExpanded] = useState(false)
    //const handlePress = () => setExpanded(expanded);

    return (
        <View>
            <ListItem bottomDivider>
                <Avatar size="large" rounded source={{ uri: artist.images[0].url,}} />
                <ListItem.Content>
                    <ListItem.Title>{artist.name}</ListItem.Title>
                    <Text>{artist.classifications[0].genre.name}/{artist.classifications[0].subGenre.name}</Text>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}
