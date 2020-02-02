import React from 'react';
import MapView, { PROVIDER_GOOGLE }  from "react-native-maps";
import { View, StyleSheet, Text} from "react-native";


export default class StationDetails extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    render(){

        const velib = this.props.navigation.state.params.velib;
        const paris= {
            latitude: velib.geo[0],
            longitude: velib.geo[1]
        };
        return(
            <View style={styles.container}>
                <Text> {velib.station_name}</Text>
                    <MapView style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        region={{
                        latitude: velib.geo[0] ,
                        longitude: velib.geo[1],
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    }}>
                        <MapView.Marker coordinate={paris}

                        />
                    </MapView>
                <View style={styles.infoStation}>
                    <Text>  Station {velib.station_state? '✅ Fonctionnel': '❌ Non fonctionel'}</Text>
                    <Text>  🚲 {velib.nbbike + velib.nbebike} vélo.s disponible.s</Text>
                    <Text>  📍 Position: {velib.geo}</Text>
                    <Text>  💳 Payement par CB : {velib.creditcard === 'Yes'? 'Oui' : 'Non'} </Text>
                </View>
            </View>
        )

    }
}

StationDetails.navigationOptions = {
    title: 'Details',
};

const styles= StyleSheet.create({
        container: {
            flex: 1,

        },

        map: {
            //...StyleSheet.absoluteFillObject,
            height: 200,
            width: 400,
        },

        infoStation: {
            marginTop: 20,
            marginLeft: 5,

        }
});


