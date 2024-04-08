 import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Blog from "../Pages/Blog";
import Blogs from "../Pages/Blogs";
import Bookmark from "../Pages/Bookmark";
import Home from "../Pages/Home";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },gfg
      {
        path: "/blogs",
        // element: <App></App>
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>fetch(`https://dev.to/api/articles/${params.id}`),
         children:[
          {
          index : true,
          element:<Content></Content>
          },
          {
            path: 'author',
            element:<Author></Author>
          }
         ]
      },
      {
        path: "/bookmarks",
        // element: <App></App>
        element: <Bookmark></Bookmark>,
      },
    ],
  },
]);