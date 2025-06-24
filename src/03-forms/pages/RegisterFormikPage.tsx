import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password1: "",
          password2: "",
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Debe de tener más de 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .equals([Yup.ref("password1")], "Deben ser iguales")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />
            <MyTextInput
              label="Password"
              name="password1"
              placeholder="Introduce de 2 a 6 caracters"
              type="password"
            />
            <MyTextInput
              label="Password confirmation"
              name="password2"
              placeholder="Introduce de 2 a 6 caracters"
              type="password"
            />

            <button type="button" onClick={formik.handleReset}>
              Reset
            </button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
