import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './CommonStyle.style';

export function headerLeft({navigation, chatUser}) {
  return (
    <View style={styles.headerLeft}>
      <TouchableOpacity
        style={{paddingRight: 10}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-back-ios" type="material" size={30} color="black" />
      </TouchableOpacity>
      <Image
        style={styles.userProfileImage}
        source={{uri: chatUser.profile_image}}
      />
      <View
        style={{
          paddingLeft: 10,
          justifyContent: 'center',
        }}>
        <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>
          {chatUser.name}
        </Text>
        <Text style={{color: '#fff', fontWeight: '300'}}>
          {chatUser.last_seen}
        </Text>
      </View>
    </View>
  );
}
