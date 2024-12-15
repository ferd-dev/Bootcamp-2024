// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PokemonCard from './components/Card';
import { usePokemon } from './hooks/PokemonHook';

export default function App() {
  const [offset, setOffset] = useState(0);
  const { loading, pokemons } = usePokemon(offset);
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return <PokemonCard id={1} name={item.name} />
        }}
        onEndReached={() => setOffset(old => old + 25)}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
