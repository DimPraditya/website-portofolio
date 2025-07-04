import { FC } from "react";
import { getBlogs } from "../_api/get-blogs";
import Markdown from "@/components/Markdown";

interface BlogBodyProps {
  objectId: string;
}

const BlogBody: FC<BlogBodyProps> = async ({ objectId }) => {
  const blog = await getBlogs(objectId);

  return (
    <section className="mt-8">
      <Markdown content={blog.content}></Markdown>
    </section>
  );
};

export default BlogBody;
