// importing Routes as Switch component is outdated, as per YT comment under video
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import PortfolioPage from "./pages/Portfolio";

import Layout from "./components/layout/Layout";

function App() {
  // domain eg is localhost:3000 or my-page.com
  // path eg is localhost:3000/products or my-page.com/products
  // to use nested components (every change of page just adds a new component), format is: 
  // <Route path = '/'> <AllMeetupsPage /> <Route>
  // <Route path = '/favorites'> <FavoritesPage /> <Route>

  return (
    <Layout>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Layout>
  );
}

export default App;