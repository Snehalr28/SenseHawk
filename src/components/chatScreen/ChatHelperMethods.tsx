import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from '../../navigation/CommonStyle.style';

export const renderMethod = (item, currentUser) => {
  const isSender = item.sender === currentUser.name;
  const alignSelf = isSender ? 'flex-end' : 'flex-start';
  const borderBottomLeftRadius = isSender ? 8 : 0;
  const borderBottomRightRadius = isSender ? 0 : 8;
  return (
    <TouchableWithoutFeedback>
      <View style={{marginTop: 6}}>
        <View
          style={{
            ...styles.messageStyle,
            alignSelf,
            borderBottomLeftRadius,
            borderBottomRightRadius,
          }}>
          <Text style={styles.messageTextStyle}>{item.message}</Text>
          <Text style={styles.messageTimeStyle}>{item.time}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export const FooterMessanger = ({
  sendMessage,
  setInputMessage,
  inputMessage,
}) => (
  <View style={{paddingVertical: 10}}>
    <View style={styles.messageInputView}>
      <TextInput
        defaultValue={inputMessage}
        style={styles.messageInput}
        placeholder="Message"
        onChangeText={text => setInputMessage(text)}
        onSubmitEditing={() => {
          sendMessage();
        }}
      />
      <TouchableOpacity
        style={styles.messageSendView}
        onPress={() => {
          sendMessage();
        }}>
        <Icon name="send" type="material" />
      </TouchableOpacity>
    </View>
  </View>
);
