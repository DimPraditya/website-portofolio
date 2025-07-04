import { FC } from "react";
import { getBlogs } from "../_api/get-blogs";
import { Badge } from "@/components/ui/badge";
import { format, formatDate } from "date-fns";
import Image from "next/image";
interface BlogHeaderProps {
  objectId: string;
}

const BlogHeader: FC<BlogHeaderProps> = async ({ objectId }) => {
  const blog = await getBlogs(objectId);

  return (
    <section className="space-y-2">
      <Badge variant={"outline"} className="bg-green-200 capitalize">
        {blog.category}
      </Badge>
      <h1 className="capitalize font-bold text-4xl">{blog.title}</h1>
      <p className="font-extralight">
        {format(new Date(blog.created), "dd MMM yyyy")}
      </p>
      <div className="relative w-full h-[360px] ">
        <Image
          src={blog.thumbnail}
          fill
          alt="thumbnail"
          className="object-cover"
        ></Image>
      </div>
    </section>
  );
};

export default BlogHeader;
