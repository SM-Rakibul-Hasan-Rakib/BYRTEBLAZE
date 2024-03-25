import { Link } from "react-router-dom";
import placeholderImage from "../assets/404 (1).jpg";

const BlogCard = ({ blog }) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <div>
      <Link
        to={`/blog/${id}`}
        className="max-w-sm transition       border-2
         border-opacity-30 border-primary hover:border-secondary hover:scale-105
         mx-auto group
         hover:no-underline focus:no-underline
         dark:bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs ">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
