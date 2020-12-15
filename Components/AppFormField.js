import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'


import AppTextInput from './AppTextInput'
import AppErrorMessage from './AppErrorMessage'

export default function AppFormField({name,placeholder,icon,...otherProps}) {

    const {handleChange, errors, touched, handleBlur, values}= useFormikContext()
    return (
    <View style={{marginBottom:10}}>
        <AppTextInput 
          type={name}
          name={name}
          icon={icon}
          placeholder={placeholder} 
          onBlur={handleBlur(name)}
          onChangeText={handleChange(name)}
          value={values[name]}
          {...otherProps}
        />
        <AppErrorMessage error={errors[name]} visible={touched[name]}/>
    </View>
    )
}

const styles = StyleSheet.create({})
