import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

export default class GunsSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView 
                style={styles.sliderBase}
                horizontal
                snapToAlignment={"center"}
            >
                <View style={styles.gunItem}>
                    <Text style={styles.gunName}>I'm a gun</Text>
                    <TouchableOpacity style={styles.gunDetails}>
                        <Image source={require('./../../assets/guns/p2020.png')} style={{width: 300}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.gunItem}>
                    <Text style={styles.gunName}>I'm a gun</Text>
                    <TouchableOpacity style={styles.gunDetails}>
                        <Image source={require('./../../assets/guns/p2020.png')} style={{width: 300}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.gunItem}>
                    <Text style={styles.gunName}>I'm a gun</Text>
                    <TouchableOpacity style={styles.gunDetails}>
                        <Image source={require('./../../assets/guns/p2020.png')} style={{width: 300}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.gunItem}>
                    <Text style={styles.gunName}>I'm a gun</Text>
                    <TouchableOpacity style={styles.gunDetails}>
                        <Image source={require('./../../assets/guns/p2020.png')} style={{width: 300}}></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    sliderBase: {
        marginTop: 30,
        width: '100%',
        height: '70%',
    },
    gunItem: {
        width: 300,
        height: '70%',
        alignItems: 'center',
        marginLeft: 20,
    },
    gunDetails: {
        backgroundColor: '#1e1e1e',
        width: 300,
        height: 400,
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        borderRadius: 10,
    },
    gunName: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 30,
    },

})