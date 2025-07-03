import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { db } from '../../config/firebaseConfig';
import { doc, getDoc, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function ChatScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Listen for messages in Firestore
  useEffect(() => {
    if (!params.id) return;
    const messagesRef = collection(db, 'Chats', params.id, 'messages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });
    return unsubscribe;
  }, [params.id]);

  // Set chat header (optional, based on your logic)
  useEffect(() => {
    const getUserDetails = async () => {
      const docRef = doc(db, 'Chats', params.id);
      const docSnap = await getDoc(docRef);
      const result = docSnap.data();
      // You may need to adjust this logic based on your user structure
      // navigation.setOptions({ headerTitle: ... });
    };
    getUserDetails();
  }, [params.id, navigation]);

  // Send message to Firestore
  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;
    const messagesRef = collection(db, 'Chats', params.id, 'messages');
    await addDoc(messagesRef, {
      text: input.trim(),
      sender: 'user', // Replace with actual user info if available
      createdAt: serverTimestamp(),
    });
    setInput('');
  }, [input, params.id]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <FlatList
        data={messages}
        inverted
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[
            styles.messageContainer,
            item.sender === 'user' ? styles.userMessage : styles.adminMessage,
          ]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 10 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  // ... your styles unchanged ...
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 30,
  },
  messageContainer: {
    maxWidth: '75%',
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userMessage: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  adminMessage: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderTopColor: 'grey',
    borderTopWidth: 0.3,
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingHorizontal: 18,
    justifyContent: 'center',
    marginLeft: 8,
  },
});