import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ReactNativeAN from 'react-native-alarm-notification';

const App = () => {
  let alarm
  const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 10000));

  const liga = async () => {
    alarm = await ReactNativeAN.scheduleAlarm({ fire_date: fireDate });
    console.log(JSON.stringify(alarm.id))
    console.log('ligaaaa')
  }

  const desliga = () => {
    ReactNativeAN.deleteAlarm(alarm.id);
    ReactNativeAN.deleteRepeatingAlarm(alarm.id);
    ReactNativeAN.removeAllFiredNotifications();
    console.log(JSON.stringify(alarm.id))
    console.log('desligaaaa')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => liga()}>
        <Text style={styles.title}>Liga</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => desliga()}>
        <Text style={styles.title}>Desliga</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 30,
  }
})

export default App
