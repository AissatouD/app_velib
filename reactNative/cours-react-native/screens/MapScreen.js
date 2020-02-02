import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";


export default class  MapScreen extends React.Component {
    state = {
        location: {
            latitude: 48.8534,
            longitude: 2.3488,

        },
        errorMessage: null
    };

    

// on vérifie que l'appli tourne bien sur un mobile
        componentDidMount() {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                this.setState({
                    errorMessage: 'Oops, ça ne fonctionne pas sur un emulateur. Essaye sur ton mobile',
                });
            } else {
                this._getLocationAsync();
            }
        };

// on demande la permission d'accéder à la position géographique
    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Autorisation refusé',
            });
        }
// on récupère la position géographique actuelle
        let location = await Location.getCurrentPositionAsync({});
        this.setState({location: location.coords});
    };

    render() {
        // je  stock la position actuelle dans une variable
        let position = this.state.location;
        let text = '';
        let latitude;
        let longitude;


        if (this.state.errorMessage) {
            text = this.state.errorMessage;

        } else if (this.state.location) {
            latitude = position.latitude;
            longitude = position.longitude;

        }
        return (
            <MapView style={styles.map}
                     provider={PROVIDER_GOOGLE}
                     region={{
                         latitude: latitude,
                         longitude: longitude,
                         latitudeDelta: 0.005,
                         longitudeDelta: 0.005,
                     }}>
                <MapView.Marker coordinate={position}/>

                <View style={styles.container}>
                    <Text style={styles.erreur}>{text}</Text>
                </View>
            </MapView>
        );
    }
}
 MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },

    erreur: {
        fontSize: 18,
        color: 'green',

    }

});

