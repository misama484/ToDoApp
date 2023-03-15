import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Checkbox from './Checkbox'

const Todo = ({id, text, isCompleted, isToday, hour}) => {  

  return (
    <View style = {styles.container}>
      <Checkbox 
        id={id}
        text={text}
        isCompleted={isCompleted}
        isToday={isToday}
        hour={hour}
      />
      <View>
        <Text style={isCompleted ? styles.textCompleted : styles.text}>{text}</Text>
        <Text style={isCompleted ? styles.hourCompleted : styles.hour}>{hour}</Text>
      </View>
      
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'darkslateblue',
  },
  textCompleted: {
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  hour: {
    fontSize: 13,
    color: 'gray',
    fontWeight: 'bold',
  }, 
  hourCompleted: {
    fontSize: 13,
    color: 'gray',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },

});



