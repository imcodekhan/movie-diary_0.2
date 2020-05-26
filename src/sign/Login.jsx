import React, { useState } from "react";
import { withFormik, Field, Form } from "formik";
import * as yup from "yup";
import { Button, Container, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { users } from "../shared/utils/DummyData";

const Login = ({ errors, touched, isSubmitting }) => {
  return (
    <Paper elevation={3}>
      <Container>
        <Form>
          <div>
            <label htmlFor="email">
              <h3>Email</h3>
            </label>

            <Field type="email" name="email" placeholder="jitu@example.com" />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">
              <h3>Password</h3>
            </label>

            <Field type="text" name="password" placeholder="password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={isSubmitting}
            style={{ margin: 10 }}
          >
            Login
          </Button>
          <Link to="/signup">
            <Button variant="contained" style={{ margin: 10 }}>
              Sign up
            </Button>
          </Link>
        </Form>
      </Container>
    </Paper>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ email, password, handleLogin }) {
    return {
      email: email || "jitu@example.com",
      password: password || "jitu@123456",
    };
  },

  handleSubmit(values, { setSubmitting, setErrors, resetForm, props }) {
    setTimeout(() => {
      const user = users.find((u) => u.email === values.email);

      if (user === undefined) {
        setErrors({ email: "Email is wrong" });
      } else {
        if (values.password === user.password) {
          setErrors({ password: "password is wrong" });
        } else {
          props.handleLogin(user);
          resetForm();
          //redirect to /diary
        }
      }

      setSubmitting(false);
    }, 2000);
  },
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  }),
})(Login);

export default FormikLogin;
