import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotal } from "./features/cart/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  useEffect(() => {
    dispatch(calculateTotal())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
    
  );
}
export default App;
