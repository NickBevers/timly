import React from "react";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("We don't know who you are without this.").min(2, "We don't think this is your email"),
  password: Yup.string().required('You forgot your password.'),
});


interface LoginFormProps {
  onSubmit: (values: Yup.InferType<typeof LoginSchema>) => void;
}


const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit
}) => {
  return (
    <div className="flex gap-0">
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => onSubmit?.(values)}
      >
        <Form>
          <Field name="username" placeholder="Username" />
          <Field name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;