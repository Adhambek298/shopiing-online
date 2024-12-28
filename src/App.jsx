import Layout from "./components/layout/Layout";
import UseParam from "./components/homePage/UseParam.jsx";
import NotFand from "./components/homePage/NotFand.jsx";
import UsePrsm2 from "./components/homePage/UsePrsm2.jsx";
import Users from "./components/homePage/Users.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ShoppingCard from "./components/homePage/ShoppingCard.jsx";
import Buyrutmalar from "./components/homePage/Buyrutmalar.jsx";
import Billing from "./components/homePage/Billing.jsx"
import Conteact from "./components/homePage/Conteact"

function App() {
    const [card, setCard] = useState(localStorage.getItem("shoppingCard") ? JSON.parse(localStorage.getItem("shoppingCard")) : [])
    useEffect(() => {
        if(card?.length!= 0){
            localStorage.setItem("shoppingCard",JSON.stringify(card))
        }else{
            localStorage.removeItem("shoppingCard");
        }
    },[card] )
    
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout card={card} setCard={setCard} />}
            />
            <Route path="/view/:id" element={<UseParam />} />
            <Route path="/param/:id" element={<UsePrsm2 />} />
            <Route path="/User" element={<Users />} />
            <Route path="/Buyrutmalar" element={<Buyrutmalar />} />
            <Route path="/PaymentPage" element={<Billing />} />
            <Route path="/Conteact" element={<Conteact />} />
            <Route
              path="/shoppingcard"
              element={<ShoppingCard card={card} setCard={setCard} />}
            />
            <Route path="*" element={<NotFand />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;