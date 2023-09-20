import "./Header.css"
import { useCart } from "../context/CartContext"
export default function Header() {
    const {amount} = useCart()
    return (
        <header>
            <p>Shopping Application</p>
            <p>สินค้าให้ตะกร้า : {amount} </p>
        </header>
    )
}