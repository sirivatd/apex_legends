import React from 'react';
import { StyleSheet, Text, View, Picker, Alert } from 'react-native';

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
                <Header title="Guns" toggleMenu={() => this.props.navigation.toggleDrawer()} />
                <View style={{borderWidth: 2, borderRadius: 10, borderColor: '#686868', width: 250, alignItems: 'center', backgroundColor: '#FFF'}}>
                    <Picker
                        selectedValue={gunClass()}
                        style={styles.classSelector}
                        onValueChange={(itemValue, itemIndex) => 
                            this.setState({class: itemValue})
                        }
                    >
                        <Picker.Item label="Pistols" value="pistol" />
                        <Picker.Item label="Shotguns" value="shotgun" />
                        <Picker.Item label="Assault Rifles" value="ar" />
                        <Picker.Item label="Snipers" value="sniper" />
                        <Picker.Item label="SMGs" value="smg" />
                        <Picker.Item label="LMGs" value="lmg" />
                    </Picker>
                </View>
                <GunsSlider />
            </View>
        )
    }

    renderGunClass() {
        return this.state.class;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    classSelector: {
        width: 162,
        marginTop: 120,
        color: '#686868',
        borderWidth: 2,
        borderColor: 'black'
    }
});