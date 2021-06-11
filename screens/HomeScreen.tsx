import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from '../components/Themed';

export default function HomeScreen() {
  return(
    <SafeAreaView>
      <View>
        <Text>Saved Artists</Text>
        <Text>Saved Venues</Text>
      </View>
    </SafeAreaView>
  )
}