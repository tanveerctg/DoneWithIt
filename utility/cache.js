import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix='cache'

const store = async (key,value) => {
    try {
      const item={
          value,
          timeStamp:Date.now()
      }
      await AsyncStorage.setItem(prefix+key, JSON.stringify(item))
    } catch (error) {
      // saving error
      console.log(error)
    }
}

const get = async (key) => {
    try {
      const value = await AsyncStorage.getItem(prefix+key)
      const item=JSON.parse(value)

      if(!value) return null

      //check wheather data is expired or not
      const now=moment(Date.now())
      const storedTime=moment(item.timeStamp)
      const isExpired=now.diff(storedTime,'minutes')

      if(isExpired>5){
        await AsyncStorage.removeItem(prefix+key)
        return null
      }

      return item.value;

    } catch(error) {
      // error reading value
      console.log(error)
    }
}

export default {
    store,
    get
}