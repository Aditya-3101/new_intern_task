import "./App.css";
import {
  DashBoard,
  loader as Mainloader,
  loader,
} from "./components/StudentDashBoard";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { CourseDetails } from "./components/CourseDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<DashBoard />} loader={Mainloader} />
      <Route exact path="/courses/detail/:id" element={<CourseDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
