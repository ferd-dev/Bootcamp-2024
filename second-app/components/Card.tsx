import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
    id: number;
    name: string;
}

function getImageUrl(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

function PokemonCard({ id, name }: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: getImageUrl(id) }} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        color: '#1e1e1e'
    },
    image: {
        width: 50,
        height: 50,
    }
});

export default PokemonCard;