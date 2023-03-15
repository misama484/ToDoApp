import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';


const Checkbox = ({id, text, isCompleted, isToday, hour}) => {
  //evalua la propiedad isToday y renderiza el correspondiente
  return isToday ? (
    <TouchableOpacity style={isCompleted ? styles.checked : styles.unChecked}>
       {isCompleted && <Icon name="check" size = {14} color="#fff"/>}       
    </TouchableOpacity>
  ) : (
    <View style={styles.isToday}></View>
  )
}

export default Checkbox

const styles = StyleSheet.create({
  checked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .3,
    shadowRadius: 5,
    elevation: 5,
  },
  unChecked:{
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .1,
    shadowRadius: 5,
    elevation: 5,
  },
  isToday: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#262626',
    marginRight: 13,
    marginLeft: 15,
  },
}) 