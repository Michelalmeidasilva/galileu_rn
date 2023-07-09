import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import useRegisterController from '../controllers/useRegisterController';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

const initialValues = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
};

const RegisterScreen = () => {
  const controller = useRegisterController();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={controller.signUp}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <View>
          <TextInput
            placeholder="name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {errors.name && <Text style={{color: 'red'}}>{errors.name}</Text>}

          <TextInput
            placeholder="e-mail"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}

          <TextInput
            placeholder="password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && (
            <Text style={{color: 'red'}}>{errors.password}</Text>
          )}

          <TextInput
            placeholder="confirm password"
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
          />
          {errors.confirmPassword && (
            <Text style={{color: 'red'}}>{errors.password}</Text>
          )}

          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export {RegisterScreen};
