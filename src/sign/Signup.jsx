import React from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import * as yup from "yup";

const Signup = ({ values, touched, errors, isSubmitting }) => (
  <Form href="/diary">
    <div>
      <label htmlFor="firstname">First Name</label>
      <Field name="firstname" type="text" placeholder="jitu" />
      {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
    </div>
    <div>
      <label htmlFor="lastname">Last Name</label>
      <Field name="lastname" type="text" placeholder="jitender" />
      {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" type="email" placeholder="jitu@example.com" />
      {touched.email && errors.email && <p>{errors.email}</p>}
    </div>
    <div>
      <label htmlFor="password">
        <h3>Password</h3>
      </label>

      <Field type="text" name="password" placeholder="password" />
      {touched.password && errors.password && <p>{errors.password}</p>}
    </div>
    <div>
      <label htmlFor="confirmpassword">Confrim Password</label>
      <Field
        name="confirmpassword"
        type="text"
        placeholder="confrim password"
      />
      {touched.confirmpassword && errors.confirmpassword && (
        <p>{errors.confirmpassword}</p>
      )}
    </div>
    <div>
      <label htmlFor="diaryname">Diary Name</label>
      <Field name="diaryname" type="text" placeholder="juke cook book" />
      {touched.diaryname && errors.diaryname && <p>{errors.diaryname}</p>}
    </div>
    <Button
      type="submit"
      disabled={isSubmitting}
      variant="contained"
      color="secondary"
    >
      signup
    </Button>
    <Button variant="contained" color="default">
      <Link to="/login">Login</Link>
    </Button>
    <pre>{JSON.stringify({ values, touched, errors }, null, 2)}</pre>
  </Form>
);
const FormikSignup = withFormik({
  mapPropsToValues({ email, password, firstname, lastname, diaryname }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      password: password || "",
      confirmpassword: "",
      diaryname: diaryname || "",
    };
  },
  validationSchema: yup.object({
    firstname: yup.string().required(),
    lastname: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required().label("password"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),

    diaryname: yup.string().required(),
  }),
  handleSubmit(values, history, { setSubmitting, setErrors, resetForm }) {
    setTimeout(() => {
      if (values.email === "jitu@example.com") {
        setErrors({ email: "The email has taken" });
      } else {
        console.log(values);

        resetForm();
        history.push("/");
      }
      setSubmitting(false);
    }, 2000);
  },
})(Signup);
export default FormikSignup;
