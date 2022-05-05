import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useCart } from "../provider/Provider";

export const Cartpage1 = () => {
    const { Cart, setCart, partsList, setpartsList } = useCart();
    const navigate = useNavigate();

    // const updateCart = (part) =>{
    //     let tempCart = [];
    //     partsList.forEach((part2)=> {
    //         if(part2.id === part.id);
    //         console.log(tempCart)
    //         tempCart.push(part2)
    //     });
    //     setpartsList(tempCart);
    // };

    const RemovefromCart = (part) =>{
        const tempCart = Cart.filter((part2) => part2.id !== part.id);
        // console.log(tempCart)
        setCart ([...tempCart])        
    }

    const Remove1fromCart = (part) =>{
        const tempCart = Cart.filter((part2) => part2.id !== part.id);
        // console.log(tempCart)
        setCart ([...tempCart])        
    }
    
    //     
    // };
    return(
        <div>
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