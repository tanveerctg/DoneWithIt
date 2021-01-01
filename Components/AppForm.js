import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Formik } from 'formik';


export default function AppForm({initialValues,children,schema,onSubmit}) {

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ handleChange, errors, touched,label, handleBlur, handleSubmit, values,isSubmitting }) => (
            children
         )}
        </Formik>
    )
}

const styles = StyleSheet.create({})
