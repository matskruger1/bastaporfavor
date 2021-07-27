import React, { Component } from 'react';
// import { card } from '../../styles/styles';
import {StyleSheet, Text, View, Image } from "react-native";


export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

  render (){
    return (
        <View styles={styles.container}>
                <Image source={{uri: this.props.image}} style={{width: 100, height: 100, }}></Image>
                <Text>Nombre: {this.props.name}</Text>
                <Text>Especie: {this.props.species}</Text>
                <Text>Estatus: {this.props.status}</Text>
            
        </View>
  
  )}  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
     borderWidth: 5, 
     margin: 2
  },
});