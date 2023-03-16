import { StyleSheet, Text, TextInput, View, TouchableOpacity, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
//importamos para usar Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTodoReducer } from '../redux/todosSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



const AddTask = () => {

  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [isToday, setIsToday] = useState(false);
  const [open, setOpen] = useState(false);

  //accedemos al estado de Redux para que nos devuelva la lista de Todos del estado
  //ponemos dos veces .todos, porque todos es un array
  const listTodos = useSelector(state => state.todos.todos);  
  //Navigation
  const navigation = useNavigation();
  //Redux
  const dispatch = useDispatch();

  //guartdar todo y anyador a lista
  const addTodo = async () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: name,
      hour: date.toString(),
      isToday: isToday,
      isCompleted: false,
    }
    //guardar en redux
    try{
      //pasamos toda la lista de todos del estado de Redux, anyadiendo el nuevo todo, para hecrlo hay que pasar el array a JSON
      await AsyncStorage.setItem("@Todos", JSON.stringify([...listTodos, newTodo]));
      //llamamos al metodo del Slice de Redux creado anteriormente
      dispatch(addTodoReducer(newTodo));
      //volvemos a pantalla anterior
      navigation.goBack();
    } catch (e){
        console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddTask</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          placeholderTextColor={'#A9A9A9'}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hour</Text>
        <DatePicker
          modal
          mode="time"
          open = {open}
          date={date}
          onConfirm = {(date) => {
            setDate(date);
            setOpen(false);           
          }}
          onCancel = {() => {
            setOpen(false);
          }}
        />
        <TouchableOpacity onPress={() => setOpen(true)} >
          <Text>{date.toTimeString()}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Today</Text>
        <Switch
          value={isToday}
          onValueChange={(value) => setIsToday(value)}
        />
      </View>  
        <Button 
          mode="contained"
          onPress={addTodo}
          icon="calendar"
          color="blue"
        >Add Task</Button>
        <Text>If you disable today, the task will be considered as tomorrow</Text>

    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
    color: "black",
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  textInput: {
    borderBottomColor: '#00000030',
    borderBottomWidth: 1,
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    alignItems: 'center',
  },
  

});