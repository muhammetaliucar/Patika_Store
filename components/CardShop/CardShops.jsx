import React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, Alert, Button } from 'react-native';

const CardShops = ({ shops }) => {
    console.log(shops)
    console.log("hello")
    return (

        <View style={styles.card_shops}>
            <Image style={styles.img_shops} source={{ uri: shops.imgURL }}></Image>
            <Text style={styles.title_shops}>{shops.title}</Text>
            <Text style={styles.price_shops}>{shops.price}</Text>
            <Text style={styles.stock_shops}>{shops.inStock == true ? null : "Stokta Yok".toUpperCase()}</Text>
            <Button style={{ borderRadius: 10 }} title="READ MORE" onPress={() => {
                Alert.alert(shops.title)
            }} />
        </View>

    )
}


const styles = StyleSheet.create({
    card_shops: {
        alignItems: 'center',
        width: Dimensions.get("window").width / 2.3,
        backgroundColor: "#ebeff2",
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
    },
    title_shops: {
        margin: 10,
        fontWeight: "bold",
        fontSize: 18,

    },
    img_shops: {
        height: Dimensions.get("window").height / 4,
        width: Dimensions.get("window").width / 3,
        borderRadius: 10,
        resizeMode: 'stretch',
        margin: 10,
        alignItems: "center",

    },
    price_shops: {
        fontSize: 18,
        color: "#7f8180",
        margin: 10,
    },
    stock_shops: {
        color: "red",
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: "bold",
    }

});

export default CardShops