import { StyleSheet, Text, TextInput, View, TouchableOpacity, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';



const AddTask = () => {

  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [isToday, setIsToday] = useState(false);
  const [open, setOpen] = useState(false);

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
          onPress={() => Alert.alert('Task added')}
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