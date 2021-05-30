import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ReactNativeAN from 'react-native-alarm-notification';

const App = () => {
  let alarm
  let fireDate = ''

  const alarmNotifData = {
    title: "Bora Bora",
    message: "Time to Work!!!",
    channel: "my_channel_id",
    small_icon: "ic_launcher",
  
    // You can add any additional data that is important for the notification
    // It will be added to the PendingIntent along with the rest of the bundle.
    // e.g.
      data: { foo: "bar" },
  };

  const liga = async () => {
    fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 10000));
    alarm = await ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: fireDate });
    console.log(JSON.stringify(alarm.id))
    console.log('ligaaaa')
  }

  const desliga = () => {
    ReactNativeAN.stopAlarmSound();
    ReactNativeAN.removeAllFiredNotifications();
    ReactNativeAN.deleteRepeatingAlarm(alarm.id);
    ReactNativeAN.deleteAlarm(alarm.id);
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
