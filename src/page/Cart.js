import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useCart } from "../provider/Provider";

export const Cartpage1 = () => {
    const { Cart, setCart, partsList, setpartsList } = useCart();
    const navigate = useNavigate();
    const updateCart = (part) =>{
        let tempCart = [];
        Cart.forEach((part2)=> {
            if(part2.id === part.id) {
                part2['qty'] = part2['qty'] - 1
            }
            tempCart.push(part2)
        });
        setCart(tempCart);
    };

    const RemovefromCart = (part) =>{
        const tempCart = Cart.filter((part2) => part2.id !== part.id);
        window.alert("Item removed from cart");
        setCart ([...tempCart])        
    }

    const Remove1fromCart = (part) =>{
        const partInCart = Cart.filter((part2) => part2.id !== part.id);
        if (part.qty > 1) {
            return updateCart(part)
        }
        setCart ([...partInCart])            
    }

    return(
        <div className="page">
            <div>
                <div className="navigation">
                    Computer Parts Store
                    <a onClick={()=>navigate('/store')} className="storepage" style={{float: 'left'}}>
                    <BsBoxArrowLeft/>
                    </a>
                </div>
                {Cart.map((part, index)=>(
                    <div className="itemcards" key={index}>
                        <img src={part.Image} alt=""/>
                        <div> Name: {part.PartName} </div>
                        <div> {"$"} {part.Price} </div>
                        <div> Quantity: {part.qty} </div>
                        <div> Inventory: {part.Quantity} </div>
                        <button id='add' className="button" onClick={()=>Remove1fromCart(part)} >Remove One</button> <button id='add' className="button" onClick={()=>RemovefromCart(part)} >Remove All</button> 
                    </div> 
                ))} 
            </div>
        </div>
    )
}