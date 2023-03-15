import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import Logo from "../images/LogoMiguelSanchez2.png"
import { todosData } from '../data/todos'

const Home = () => {
  //ordenamos los items de la lista, para pasar al final los isCompleted
  const [localData, setLocalData] = useState(
    todosData.sort((a, b) => {return a.isCompleted - b.isCompleted})
  );
  //controlamos el boton HideCompleteds
  const [isHidden, setIsHidden] = useState(false);

  const handleHideCompleted = () => {
    //si el estado es isHidden, reinicia localData. en caso contrario, solo muestra los isCompleted en false
    if(isHidden) {
      setIsHidden(false);
      setLocalData(todosData.sort((a, b) => {return a.isCompleted - b.isCompleted}));
      return;    
    };
    setIsHidden(!isHidden);
    setLocalData(localData.filter(todo => !todo.isCompleted));
  };

  return (
    <View style={styles.container}>
      <Image
      source={Logo}
      style = {styles.logo}
      />
      <View style ={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style = { styles.title }>Today</Text>
        <TouchableOpacity onPress={handleHideCompleted}>
          <Text style={styles.hideCompleted}>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
        </TouchableOpacity>
      </View>      
      <TodoList todosData = { localData.filter(todo => todo.isToday) }/>
      <Text style = { styles.title }>Tomorrow</Text>
      <TodoList todosData = { todosData.filter(todo => !todo.isToday) }/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
    color: "black",
  },
  hideCompleted: {
    color: 'blue',
  },
  button:{
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 30,
    right: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  plus:{
    fontSize: 40,
    color: 'white',
    position: 'absolute', 
    top: -8,
    left: 10,
  },
});