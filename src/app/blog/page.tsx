import BlogList from "../(home)/_components/BlogList";
import Jumbotron from "../(home)/_components/Jumbotron";

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <Jumbotron />
      <BlogList />
    </div>
  );
};

export default Blog;
