"use client";

import TiptapRichtextEditor from "@/components/TiptapRichtextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Trash } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import useCreateBlog from "./_hooks/useCreateBlog";
import { AuthGuard } from "@/hoc/AuthGuard";
import { bebasNeue } from "@/lib/fonts";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  content: Yup.string().required("Content is required"),
  thumbnail: Yup.mixed().nullable().required("Thumbnail is required"),
});

const Write = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const onChangeThumbnail = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const files = e.target.files;

    if (files && files.length) {
      setSelectedImage(URL.createObjectURL(files[0]));
      setFieldValue("thumbnail", files[0]);
    }
  };

  const removeThumbnail = (
    setFieldValue: (field: string, value: any) => void
  ) => {
    setSelectedImage("");
    setFieldValue("thumbnail", null);
  };

  const { mutateAsync: createBlog, isPending } = useCreateBlog();

  return (
    <main className="min-h-screen bg-[#fdfcf9] px-4 py-16">
      <section className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100">
        <h1 className={`text-4xl text-green-800 font-bold text-center ${bebasNeue.className}`}>
          Create New Blog
        </h1>

        <Formik
          initialValues={{
            title: "",
            description: "",
            content: "",
            category: "",
            thumbnail: null,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await createBlog(values);
          }}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-6">
              {/* TITLE */}
              <div className="grid gap-1">
                <Label htmlFor="title" className="text-green-800 font-medium">
                  Title
                </Label>
                <Field
                  name="title"
                  as={Input}
                  placeholder="Enter your blog title"
                  className="rounded-xl"
                />
                <ErrorMessage name="title" component="p" className="text-sm text-red-500" />
              </div>

              {/* CATEGORY */}
              <div className="grid gap-1">
                <Label htmlFor="category" className="text-green-800 font-medium">
                  Category
                </Label>
                <Field
                  name="category"
                  as={Input}
                  placeholder="Enter blog category"
                  className="rounded-xl"
                />
                <ErrorMessage name="category" component="p" className="text-sm text-red-500" />
              </div>

              {/* DESCRIPTION */}
              <div className="grid gap-1">
                <Label htmlFor="description" className="text-green-800 font-medium">
                  Description
                </Label>
                <Field
                  name="description"
                  as={Textarea}
                  placeholder="Brief description about this blog"
                  className="resize-none rounded-xl"
                />
                <ErrorMessage name="description" component="p" className="text-sm text-red-500" />
              </div>

              {/* CONTENT */}
              <TiptapRichtextEditor label="Content" name="content" />

              {/* THUMBNAIL */}
              <div className="grid gap-1">
                <Label htmlFor="thumbnail" className="text-green-800 font-medium">
                  Thumbnail
                </Label>
                {selectedImage ? (
                  <div className="relative w-fit">
                    <Image
                      src={selectedImage}
                      alt="thumbnail"
                      width={300}
                      height={200}
                      className="object-cover rounded-lg shadow-md"
                    />
                    <Button
                      size="icon"
                      type="button"
                      className="absolute -top-2 -right-2 rounded-full bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => removeThumbnail(setFieldValue)}
                    >
                      <Trash size={18} />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Input
                      name="thumbnail"
                      type="file"
                      accept="image/*"
                      onChange={(e) => onChangeThumbnail(e, setFieldValue)}
                      className="rounded-xl"
                    />
                    <ErrorMessage
                      name="thumbnail"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </>
                )}
              </div>

              {/* SUBMIT */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl px-6 py-2"
                >
                  {isPending ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default AuthGuard(Write);
