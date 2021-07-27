import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../components/Card';
import { getData } from '../api/rickandmorty';
// import { card } from '../../styles/styles';

import { View, ActivityIndicator, TouchableOpacity, Text, FlatList, TextInput } from "react-native";

export default class Screen extends Component {
  
constructor() {
  super();
  this.state = {
    show: {},
    likes:[],
    contador:1,
    dislikes:[]
  }
}


async deleteCard() {
  console.log(this.state.contador)
  //  llaman una nueva tarjeta
  let nuevoNumero = this.state.contador + 1
  this.setState({contador: nuevoNumero})
  this.getDataFromApi();
}


getDataFromApi() {
  getUser(this.state.contador)
  .then((result)=> {
    this.setState({show: result})
  }) 

}

async componentDidMount(){
  this.getDataFromApi()
}


async savePerson(item){
  try{
    await this.state.likes.push(item)
    console.log(this.state.likes)
    const liked = JSON.stringify(this.state.likes)
    await AsyncStorage.setItem('@likes', liked)
    //  llamo una nueva tarjeta
    let nuevoNumero = this.state.contador + 1
    this.setState({contador: nuevoNumero})
    this.getDataFromApi();
  } catch(e) {
    console.log(e)
  }
}


  render (){
    return (
    <View>

        { this.state.contador < 672

        // if(this.state.contador < 672) {
        //   view card name dasdnaosa
        // } else {
        //   no hay mas tarjetas rey
        // }
        
        ?

          <View style= {{backgroundColor: '#87cefa', borderWidth: 5, margin: 2}}>
            
            <Card
              name={this.state.show.name} 
              species={this.state.show.species} 
              status={this.state.show.status} 
              image={this.state.show.image} 
            />
  
            <TouchableOpacity onPress={() => this.savePerson(this.state.show) }><Text>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.deleteCard() }>
            <Text>Descartar</Text>
            </TouchableOpacity>
            
  
          </View>

          :

            <View>
              <Text>No hay mas tarjetas </Text>
            </View>

      
        }
      
        
    

    </View>
  
  
  )}  

}
