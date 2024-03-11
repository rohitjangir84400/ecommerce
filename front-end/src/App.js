import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Footer from "./components/commen/footer";
import HomeScreen from "./screens/home_screen";
import Navbar from "./components/commen/navbar";
import Fashion from "./screens/fashion_catogery_screen";
import Electronics from "./screens/electronics_catogery_screen";
import Sports from "./screens/sports_catogery_screen";
import LoginForm from "./components/commen/loginform";
import RegisterForm from "./components/commen/registerform";
import ProductDetails from "./screens/product_overview";
import CartScreen from "./screens/cart_screen";
import PlaceOrder from "./components/placeorder";
import UserProfile from "./screens/user_profile_screen";

function App() {
  return (
    <>
      {/* routes for the application */}
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/catogery/fashion" element={<Fashion />} />
            <Route path="/catogery/electronics" element={<Electronics />} />
            <Route path="/catogery/sports" element={<Sports />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
