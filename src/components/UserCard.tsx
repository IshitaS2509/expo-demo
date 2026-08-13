import { View, Text, StyleSheet } from 'react-native';

export type User = {
  id: number;
  name: string;
  email: string;
};

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  email: {
    marginTop: 5,
  },
});