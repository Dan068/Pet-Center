import {Formik, Field,Form, ErrorMessage} from 'formik';
import { validate } from '../../helpers/validate';
import { useState } from 'react';

const FormikRegister =()=>{
    const registerPost = ()=>{
        const [form, setForm]= useState(initialValues);
        axios.post('http://localhost:3001/users/register', form)
    }
    return(
        <Formik
        initialValues={{ name: '', email: '', birthdate:'', nDni:'', username:'', password: ''  }}
        validate={validate}
        //onSubmit={}
      >
        
          <Form>
            <h1>Registro</h1>
            <div>
              <label htmlFor="name">Nombre</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="email">Correo Electronico</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="birthdate">Fecha de nacimiento</label>
              <Field type="date" name="b irthdate" />
              <ErrorMessage name="birthdate" component="div" />
            </div>
            <div>
              <label htmlFor="nDni">nDni</label>
              <Field type="text" name="nDni" />
              <ErrorMessage name="nDni" component="div" />
            </div>
            <div>
              <label htmlFor="username">Usuario</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Registrarse</button>
          </Form>
      </Formik>
    )

}
 export default FormikRegister;