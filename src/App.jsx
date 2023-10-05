import "./App.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, number, bool } from "yup";

function App() {
  //state management
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    age: "",
    select: "",
    checkbox: "",
  };

  // validation schema
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = object({
    name: string().required("your name is required").min(2).max(15),
    email: string().required("your email is required").email("your email is invalid"),
    phone: string()
      .required("youre phone number is required")
      .matches(phoneRegExp, "phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    age: number()
      .required("your age is required")
      .positive("age can not be negative")
      .integer("your age needs to be a integer"),
    select: string().required("option is required").oneOf(["option1", "option2", "option3"]),
    checkbox: bool().required("checkbox needs to be checked").oneOf([true], "checkbox needs to be checked"),
  });

  //submithandler
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">name</label>
            <Field
              name="name"
              id="name"
            />
            <ErrorMessage
              name="name"
              component="p"
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <Field
              name="email"
              id="email"
            />
            <ErrorMessage
              name="email"
              component="p"
            />
          </div>

          <div>
            <label htmlFor="phone">phone</label>
            <Field
              name="phone"
              id="phone"
            />
            <ErrorMessage
              name="phone"
              component="p"
            />
          </div>

          <div>
            <label htmlFor="age">age</label>
            <Field
              name="age"
              id="age"
            />
            <ErrorMessage
              name="age"
              component="p"
            />
          </div>

          <div>
            <label htmlFor="select">select</label>
            <Field
              name="select"
              as="select"
              id="select"
            >
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Field>
            <ErrorMessage
              name="select"
              component="p"
            />
          </div>

          <div>
            <label htmlFor="checkbox">checkbox</label>
            <Field
              id="checkbox"
              name="checkbox"
              type="checkbox"
            />
            <ErrorMessage
              name="checkbox"
              component="p"
            />
          </div>

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default App;
