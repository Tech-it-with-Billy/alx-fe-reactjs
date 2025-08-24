import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
    return (
        <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
            console.log("Submitting data:", values);
            alert("User registered successfully with Formik!");
            resetForm();
        }}
        >
            {() => (
                <Form className="p-4 border rounded w-80 mx-auto mt-10">
                    <div className="mb-2">
                        <Field name="username" type="text" placeholder="Username" className="border p-2 w-full" />
                        <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-2">
                        <Field name="email" type="email" placeholder="Email" className="border p-2 w-full" />
                        <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-2">
                        <Field name="password" type="password" placeholder="Password" className="border p-2 w-full" />
                        <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
                    </div>

                    <button type="submit" className="bg-green-500 text-white p-2 w-full rounded">
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;