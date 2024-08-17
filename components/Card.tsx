import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
    id: number;
    name: string;
}

function getImageUrl(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

function PokeCard({ id, name }: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: getImageUrl(id) }} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        width: '100%'
    },
    name: {
        fontSize: 18,
        color: '#343a40',
        textTransform: 'capitalize',
        marginLeft: 15,
    },
    image: {
        width: 70,
        height: 70,
    }
});

export default PokeCard;