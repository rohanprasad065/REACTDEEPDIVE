  import { createRoot } from "react-dom/client";
  import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from "react-router-dom";
  import { Layout } from "./Layout.jsx"
  import "./index.css";
  import Home from "./components/Home/Home.jsx";
  import About from "./components/About/About.jsx";
  import Contact from "./components/Contactus/Contactus.jsx";
  import User from "./components/User/User.jsx";
  import Github , {githubInfoLoader} from "./components/Github/Github.jsx";



    /*const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true, 
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          
          }
        ],
      },
    ]);*/
    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />   {/* ✅ MUST */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:id" element={<User/>} />
        <Route 
        loader={githubInfoLoader}
        path="github" element={<Github/>} />
      </Route>
    )
  );

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );