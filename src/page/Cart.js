import { BsBoxArrowLeft } from "react-icons/bs";
import { useCart } from "../provider/Provider";

export const Cartpage1 = () => {
    const {Cart} = useCart();
    
    return(
        <div>
            <div>
                <div className="navigation">
                    Computer Parts Store
                    <a href='./Storepage.js' className="storepage" style={{float: 'left'}}>
                    <BsBoxArrowLeft/>
                    </a>
                </div>
                {Cart.map((part, index)=>(
                    <div className="Cartitems" key={index}>
                        <img src={part.Image} alt=""/>
                        <div> Name: {part.PartName} </div>
                        <div> {"$"} {part.Price} </div>
                        <div> Quantity: {part.Quantity} </div>
                        <button id='add' className="button" onClick={()=>RemovefromCart(part)}>Remove from Cart</button> 
                    </div> 
                  
                ))} 
            </div>
        </div>
    )
}