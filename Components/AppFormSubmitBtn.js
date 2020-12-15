import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'

import Button from './Button'

export default function AppFormSubmitBtn() {
    const {handleSubmit, isSubmitting}=useFormikContext()
    return (
        <Button onPress={handleSubmit}  text="Submit" disabled={isSubmitting}/>
    )
}

const styles = StyleSheet.create({
    container:{marginTop:15,backgroundColor:"#ff534b"}
})
