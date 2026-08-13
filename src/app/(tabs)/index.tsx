import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import UserCard, { User } from '@/components/UserCard';

const users: User[] = [
  {
    id: 1,
    name: 'Ishita',
    email: 'ishita@example.com',
  },
  {
    id: 2,
    name: 'Sanskriti',
    email: 'sanskriti@example.com',
  },
  {
    id: 3,
    name: 'Ananya',
    email: 'ananya@example.com',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Demo</Text>

      <Text style={styles.subtitle}>
        React Native + TypeScript
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Pressable
        style={styles.button}
        onPress={() => alert(`Hello ${name}!`)}
      >
        <Text style={styles.buttonText}>
          Say Hello
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/profile')}
      >
        <Text style={styles.buttonText}>
          Go to Profile
        </Text>
      </Pressable>

      {name !== '' && (
        <Text style={styles.result}>
          Hello, {name}! 👋
        </Text>
      )}

      <Text style={styles.listTitle}>Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserCard user={item} />
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
  },

  result: {
    marginVertical: 10,
    fontSize: 18,
    textAlign: 'center',
  },

  listTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },

  list: {
    flex: 1,
  },
});