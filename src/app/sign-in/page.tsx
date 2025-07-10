"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Loader } from "lucide-react";
import * as Yup from "yup";
import useLogin from "./_hooks/useLogin";
import { bebasNeue } from "@/lib/fonts";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6),
});

const SignIn = () => {
  const { mutateAsync: login, isPending } = useLogin();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fdfcf9] px-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg border-none">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await login({ login: values.email, password: values.password });
          }}
        >
          <Form className="space-y-4">
            <CardHeader className="text-center">
              <CardTitle className={`text-4xl text-green-800 ${bebasNeue.className}`}>
                Sign In
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Masuk ke akun Kopi Titik Anda
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-6 px-6">
              {/* EMAIL */}
              <div className="grid gap-1">
                <Label htmlFor="email" className="text-base font-semibold text-green-800">
                  Email
                </Label>
                <Field
                  name="email"
                  as={Input}
                  type="email"
                  placeholder="Your email"
                  className="rounded-xl"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* PASSWORD */}
              <div className="grid gap-1">
                <Label htmlFor="password" className="text-base font-semibold text-green-800">
                  Password
                </Label>
                <Field
                  name="password"
                  as={Input}
                  type="password"
                  placeholder="Your password"
                  className="rounded-xl"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 transition-colors text-white font-semibold rounded-xl py-5 text-base"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader className="animate-spin" />
                    Logging in...
                  </span>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </main>
  );
};

export default SignIn;
