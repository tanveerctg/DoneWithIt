import React from 'react'
import LottieView from 'lottie-react-native';

export default function Loading({visible=false}) {

    if(!visible) return null

    return (
     <LottieView
        source={require('../animations/loading.json')}
        autoPlay loop
      />
    )
}
