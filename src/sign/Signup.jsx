import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import * as yup from "yup";
import { users } from "../shared/utils/DummyData";
import { Paper, Container } from "@material-ui/core";

const Signup = ({ touched, errors, isSubmitting }) => (
  <Paper elevation={3}>
    <Container>
      <Form href="/diary" style={{ margin: 20, padding: 20 }}>
        <div>
          <label htmlFor="firstname">
            <h3>First Name</h3>
          </label>
          <Field name="firstname" type="text" placeholder="jitu" />
          {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div>
          <label htmlFor="lastname">
            <h3>Last Name</h3>
          </label>
          <Field name="lastname" type="text" placeholder="jitender" />
          {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div>
          <label htmlFor="email">
            <h3>Email</h3>
          </label>
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
          <label htmlFor="confirmpassword">
            <h3>Confrim Password</h3>
          </label>
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
          <label htmlFor="diaryname">
            <h3>Diary Name</h3>
          </label>
          <Field name="diaryname" type="text" placeholder="juke cook book" />
          {touched.diaryname && errors.diaryname && <p>{errors.diaryname}</p>}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          color="secondary"
          style={{ margin: 10 }}
        >
          signup
        </Button>
        <Link to="/login">
          <Button variant="contained" color="default">
            Login
          </Button>
        </Link>
      </Form>
    </Container>
  </Paper>
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
  handleSubmit(values, { setSubmitting, setErrors, resetForm, props }) {
    setTimeout(() => {
      const user = users.find((u) => u.email === values.email);
      setSubmitting(false);
      if (user === undefined) {
        console.log(values);
        props.handleSignUp(values);
        resetForm();
        props.history.push("/");
      } else if (user.email === values.email) {
        setErrors({ email: "email is taken" });
      }
    }, 2000);
  },
})(Signup);
export default withRouter(FormikSignup);
