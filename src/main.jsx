
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./Routes/Routes";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/blogs",
//         // element: <App></App>
//         element: <Blogs></Blogs>,
//         loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
//       },
//       {
//         path: "/blog/:id",
//         element: <Blog></Blog>,
//         loader: ({ params }) =>fetch(`https://dev.to/api/articles/${params.id}`)

//       },
//       {
//         path: "/bookmarks",
//         // element: <App></App>
//         element: <Bookmark></Bookmark>,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </>
);
