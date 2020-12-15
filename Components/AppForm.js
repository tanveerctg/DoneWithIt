import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Formik } from 'formik';



export default function AppForm({initialValues,children,schema}) {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting })  =>  setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000)}
      >
        {({ handleChange, errors, touched,label, handleBlur, handleSubmit, values,isSubmitting }) => (
            children
         )}
        </Formik>
    )
}

const styles = StyleSheet.create({})
