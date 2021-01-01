import React from 'react'
import { Image,TouchableWithoutFeedback } from 'react-native'

export default function ImageContainer({imageLists,onPress}) {
    return (
        <>
            {
                imageLists.length>0 
                && 
                imageLists.map((image,index)=>
                    <TouchableWithoutFeedback onPress={()=>onPress(image.id)} key={index}>
                        <Image source={{ uri: image.url }} style={{ width: 92, height:92,borderRadius:8,marginRight:10,marginBottom:10 }} />
                    </TouchableWithoutFeedback>
                )
            }
        </>
    )
}
