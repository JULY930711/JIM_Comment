import { useState } from "react";
import "./style/template.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CommentinnerPage from "./components/commentpages/CommentinnerPage";

import CommentMain from "./components/commentpages/CommentMain";
import { ThemeContextProvider } from "./contexts/ThemeContext";
// import ThemeContext from './contexts/ThemeContext'

// function ProfilePage() {
//   // Get the userId param from the URL.
  
//   // ...
// }

function App() {

 
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<CommentMain />} />
          {/* <Route path="/comment-detail" element={<CommentinnerPage />} /> */}
          <Route path="/comment-detail">
            <Route path=":mygamesName" element={<CommentinnerPage />} />
            {/* <Route path='' element={<CommentinnerPage />} /> */}
          </Route>
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
