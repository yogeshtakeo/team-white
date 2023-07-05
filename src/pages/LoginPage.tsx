import { Form, Formik, Field } from "formik";
import { toast, Toaster } from "react-hot-toast";
import InputField from "./InputField";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/LoginPageComponent/Slider";
import SubNavbar from "../components/LoginPageComponent/SubNavbar";
import { Link } from "react-router-dom";

function LoginPage() {
  const initialValues = {
    Username: "",
    Password: "",
  };

  const validationSchema = Yup.object({
    Username: Yup.string().required("Enter Username"),
    Password: Yup.string().required("Please enter Password"),
  });

  function submitHandler(values: typeof initialValues) {
    toast.success("Successfully logged in");
  }

  return (
    <>
      <Navbar />

      <div className="shadow-gray-400 mt-10 ml-10 mr-10 shadow-xl shadow-gray-600">
        <SubNavbar />
        <div className="flex">
          <div className="login border-solid border-black p-10 h-[460px] rounded-bl-md ">
            <Formik
              initialValues={initialValues}
              onSubmit={submitHandler}
              validationSchema={validationSchema}
            >
              {() => {
                return (
                  <div>
                    <Form className="grid grid-rows-4 text-white text-xl w-[32vw] justify-center">
                      <InputField
                        type="text"
                        name="Username"
                        label="Username"
                        className="w-[26vw]"
                      />
                      <InputField
                        type="password"
                        name="Password"
                        label="Password"
                      />

                      <button
                        className="border-solid border-white border-2 mt-2 h-10 hover:bg-gray-200 hover:text-gray-500 rounded"
                        type="submit"
                      >
                        <Link to="/home">LOGIN</Link>
                      </button>
                      <div className="">
                        <p className="mt-2 mb-2">Forgot ID/Password?</p>
                        <p className="mt-2 mb-2">Security & Help</p>
                      </div>
                    </Form>
                  </div>
                );
              }}
            </Formik>

            <Toaster />
          </div>
          <Slider />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LoginPage;
