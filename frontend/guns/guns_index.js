import React from 'react';
import { Platform, StyleSheet, Text, View, Picker, Alert } from 'react-native';

import Header from './../header/header';
import GunsSlider from './guns_slider';

export default class GunsIndex extends React.Component {
    static navigationOptions = {
        title: 'Guns',
      };

    constructor(props) {
        super(props);
        this.state = {
            class: 'pistol'
        };
    }

    render() {
        function _gunClass() {
            return this.state.class;
        }

        const gunClass = _gunClass.bind(this);
        return (
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={gunClass()}
                        style={styles.classSelector}
                        onValueChange={(itemValue, itemIndex) => 
                            this.setState({class: itemValue})
                    }>
                        <Picker.Item label="Pistols" value="pistol" />
                        <Picker.Item label="Shotguns" value="shotgun" />
                        <Picker.Item label="Assault Rifles" value="ar" />
                        <Picker.Item label="Snipers" value="sniper" />
                        <Picker.Item label="SMGs" value="smg" />
                        <Picker.Item label="LMGs" value="lmg" />
                    </Picker>
                </View>
                <GunsSlider />
                <Header title="Guns" toggleMenu={() => this.props.navigation.toggleDrawer()} />
            </View>
        )
    }

    renderGunClass() {
        return this.state.class;
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    pickerContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#D0D0D0',
        width: 250,
        alignItems: 'center',
        marginTop: 50,
        ...Platform.select({
            ios: {
                height: 200
            },
            android: {
                height: 120
            },
        }),
    },
    classSelector: {
        width: 162,
        color: '#686868',
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: 60
            },
        }),
    }
});