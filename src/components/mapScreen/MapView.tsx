import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

import Mapbox from '@rnmapbox/maps';
import {styles} from './MapView.style';
import {mapCamera} from '../../utils/MapHelpMethods';
import {MarkerView} from '@rnmapbox/maps';
import {getFilteredArray} from '../../utils/CalculationMethods';
Mapbox.setAccessToken(
  'sk.eyJ1Ijoic25laGFscjI4MDMiLCJhIjoiY2xoeGJibmYwMDVuYzNlcnM3dW9xaG9yYyJ9.GrNn7_DRiEgz0kkZTiRAgg',
);

export default function MapView({navigation}) {
  const puneCord = [73.8544541, 18.521428];
  const [users, setUsers] = useState([
    {coordinate: [73.8544541, 18.521428], name: 'You'},
  ]);
  const onRegionChange = (r: {
    properties: any;
    gestures?: {isGestureActive: boolean};
  }) => {
    let filterArr: any[] = getFilteredArray(r);
    setUsers([{coordinate: r.properties.center, name: 'You'}, ...filterArr]);
  };

  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map} onMapIdle={r => onRegionChange(r)}>
        <>
          {mapCamera(puneCord)}
          {users.map((user, i) => (
            <MarkerView key={`${i}`} id={`${i}`} coordinate={user.coordinate}>
              <TouchableOpacity
                key={`${i + 1}`}
                onPress={() =>
                  navigation.navigate('ChatScreen', {name: user.name, count:0})
                }>
                <Text> {user.name} </Text>
                <Image
                  style={{width: 30, height: 40}}
                  key={`${i + 2}`}
                  source={
                    i === 0
                      ? require('../../Assets/marker_image.png')
                      : require('../../Assets/user_blue.png')
                  }
                />
              </TouchableOpacity>
            </MarkerView>
          ))}
        </>
      </Mapbox.MapView>
    </View>
  );
}
