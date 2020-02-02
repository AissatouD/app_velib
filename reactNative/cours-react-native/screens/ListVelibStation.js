 import React from 'react';
 import {
   StyleSheet,
   Text,
   View,
   ActivityIndicator,
   FlatList,
   TouchableOpacity,

} from 'react-native';
import {AsyncStorage} from 'react-native';

export default class ListVelibStation extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true};

  }
  componentDidMount(){
    return fetch('https://raw.githubusercontent.com/tlenclos/fake-opendata-velib-server/master/db.json')
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson.records,
          }, () => {});

            AsyncStorage.setItem('tableau_station', JSON.stringify(responseJson), () => {});
            AsyncStorage.getItem('tableau_station', (err, res) => {
                {/*return console.log(JSON.parse(res))*/}
            });

        })
        .catch((error) =>{
          console.error(error);
        });
  }

  render(){

    if(this.state.isLoading){
      return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
      )
    }
    return(
        <View style={ styles.container}>
          <FlatList
              data={this.state.dataSource}
              keyExtractor={({recordid}) => recordid}

              renderItem={({item}) =>
                  <TouchableOpacity style={styles.containerItem} onPress={() =>
                      this.props.navigation.navigate('Station', {velib: item.fields})}>
                      <Text style={styles.item}>{item.fields.station_name}, {item.fields.nbedock}</Text>
                  </TouchableOpacity> }
          />
        </View>
    );
  }
}

ListVelibStation.navigationOptions = {
  title: 'Station vélib',

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

  },

  containerItem: {
      backgroundColor: '#fff',
      justifyContent:'space-between',
      borderRadius:1,


   },

   item: {
       padding: 10,
       fontSize: 14,
       height: 44,
       backgroundColor: '#837394',
       marginTop: 10,
       borderRadius: 20

   }
});
