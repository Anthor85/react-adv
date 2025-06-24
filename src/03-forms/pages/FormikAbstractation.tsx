import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
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
          email: Yup.string()
            .email("Debe de tener formato email")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string().notOneOf([""]).required("Requerido"),
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
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Depeloper</option>
              <option value="designer">Designer</option>
              <option value="junior">Junior</option>
              <option value="devops">Devops</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
