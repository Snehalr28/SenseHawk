import {StyleSheet, Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {height: '100%', aspectRatio: 1, borderRadius: 100},
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  messageStyle: {
    maxWidth: Dimensions.get('screen').width * 0.8,
    backgroundColor: '#3a6ee8',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
  },
  messageTextStyle: {
    color: '#fff',
    fontSize: 16,
  },
  messageTimeStyle:{
    color: '#dfe4ea',
    fontSize: 14,
    alignSelf: 'flex-end',
  }
});
