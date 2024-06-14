import { useLoaderData } from "react-router-dom";

const Content = () => {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <section>
      <h1>ami akjon content</h1>
    </section>
  );
};

export default Content;