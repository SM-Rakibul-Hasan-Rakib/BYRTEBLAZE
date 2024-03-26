// import Blogs from "../Pages/Blogs";
// import Home from "../Pages/Home";
// import Blog from "../Pages/Blog";
// import MainLayout from "../Layouts/MainLayout";
// import Bookmark from "../Pages/Bookmark";

//  const Routes = () => {
//   return (
//  export const router = createBrowserRouter([
//       {
//         path: "/",
//         element: <MainLayout></MainLayout>,
//         children: [
//           {
//             path: "/",
//             element: <Home></Home>,
//           },
//           {
//             path: "/blogs",
//             // element: <App></App>
//             element: <Blogs></Blogs>,
//             loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
//           },
//           {
//             path: "/blog/:id",
//             element: <Blog></Blog>,
//             loader: ({ params }) =>fetch(`https://dev.to/api/articles/${params.id}`)
             
//           },
//           {
//             path: "/bookmarks",
//             // element: <App></App>
//             element: <Bookmark></Bookmark>,
//           },
//         ],
//       },
//     ]);
//   );
// };

// export default Routes;