import { BsCart4 } from "react-icons/bs";
import { useCart } from "../provider/Provider";
import { useNavigate } from "react-router-dom";


export const Storepage1 = () =>{
    const { Cart, setCart, partsList, setpartsList } = useCart();
    const navigate = useNavigate();
    

    const AddtoCart = (part) =>{
        const partInCart = Cart.filter((part2) => part2.id === part.id);
        if (partInCart.length) {
            return updateCart(part)
            
        }
        part['qty'] = 1
        setCart ([...Cart, part])
    };

    const updateCart = (part) =>{
        let tempCart = [];
        Cart.forEach((part2)=> {
            window.alert("Item added to Cart");
            if(part2.id === part.id) {
                part2['qty'] = part2['qty'] + 1
            }
            tempCart.push(part2)
        });
        setCart(tempCart);
    };

    return(
        <div>
            <div className="navigation">
                Computer Parts Store
                <div style={{float: 'right',position: 'relative'}}>
                    <a onClick={()=>navigate('/cart')}>
                       <BsCart4/>
                    </a>
                    <div className="Cartcount">
                        {Cart.length}
                    </div>
                </div>
            </div>
            {partsList.map((part, index)=>(
                <div className="itemcards" key={index}>
                    <img src={part.Image} alt=""/>
                    <div> Name: {part.PartName} </div>
                    <div> {"$"} {part.Price} </div>
                    <div> Quantity: {part.Quantity} </div>
                    <button id='add' className="button" onClick={()=>AddtoCart(part)}>Add to Cart</button> 
                </div> 
                  
            ))}
        </div>            
    )
}