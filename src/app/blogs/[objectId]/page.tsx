import { Suspense } from "react";
import BlogBody from "./_components/BlogBody";
import BlogHeader from "./_components/BlogHeader";
import Loading from "@/components/Loading";

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) => {
  const objectId = (await params).objectId;
  return (
    <main className="container mx-auto mt-28 px-4 pb-20">
      <Suspense fallback={<Loading />}>
        <BlogHeader objectId={objectId}></BlogHeader>
        <BlogBody objectId={objectId}></BlogBody>
      </Suspense>
    </main>
  );
};

export default BlogDetail;
