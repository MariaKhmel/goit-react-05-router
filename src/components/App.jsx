import { Routes, Route } from "react-router-dom";
import Dogs from "./Dogs";
import DogDetails  from "./DogDetails";
import { Layout } from "./Layout";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<div>Home</div>} />
        <Route path="dogs" element={<Dogs/>} />
          <Route path="dogs/:dogId" element={<DogDetails />} >
            <Route path="breeds" element={<div>breeds</div>} />
            <Route path="pictures" element={<div>pictures</div>}/>
          </Route>
         </Route>
      </Routes>
    
    </>
  );
};
