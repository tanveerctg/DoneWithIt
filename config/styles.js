import {Platform} from 'react-native'

export default {
    text: {
        ...Platform.select({
            ios: {
              fontSize:18
            },
            android: {
                fontSize:19
            }
        })
    },
    colors:{
        lightDark:'#4c4c4c'
    }
}