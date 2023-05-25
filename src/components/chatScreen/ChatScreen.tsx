import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Keyboard, FlatList} from 'react-native';
import {styles} from '../../navigation/CommonStyle.style';
import {headerLeft} from '../../navigation/NavigationOptions';
import {getTime} from '../../utils/CalculationMethods';
import {chatHitory} from '../../utils/ChatHistory';
import {FooterMessanger, renderMethod} from './ChatHelperMethods';

export default function ChatScreen({navigation, route }) {
  const {name} = route.params;
  console.log(name);
  const [inputMessage, setInputMessage] = useState('');
  const [chatUser] = useState({
    name: name,
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });
  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [messages, setMessages] = useState(chatHitory);

  useEffect(() => {
    navigation.setOptions({
      title: name,
      headerLeft: () => headerLeft({navigation, chatUser}),
    });
  }, [chatUser, name, navigation]);
  useEffect(() => {
    console.log('UseEffect as component did mount');
  }, []);

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({item}) => renderMethod(item, currentUser)}
        />
        <FooterMessanger
          sendMessage={sendMessage}
          setInputMessage={setInputMessage}
          inputMessage={inputMessage}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
