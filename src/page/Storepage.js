import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useCart } from "../provider/Provider";
import { useNavigate } from "react-router-dom";

export const Storepage1 = () =>{
    const { Cart, setCart } = useCart();
    const navigate = useNavigate();
    const [partsList, setpartsList] = useState([
        {
            PartName: 'Textured Keyboard KeyCaps',
            Image:'',
            Price: '15',
            Quantity: '13',
            id: '1'
        },{
            PartName: 'Female USB B Port',
            Image:'',
            Price: '15',
            Quantity: '5',
            id: '2'
        },{
            PartName: 'USB C Port',
            Image:'',
            Price: '30',
            Quantity: '10',
            id: '3'
        },{
            PartName: 'LED light strips',
            Image:'',
            Price: '20',
            Quantity: '2',
            id: '4'
        }
    ]);

    

    const AddtoCart = (part) =>{
        setCart ([...Cart, part])
        updateCart(part)
    };

    const updateCart = (part) =>{
        let tempCart = [];
        partsList.forEach((part2)=> {
            if(part2.id === part.id) part2.total = part2.total - 1;
            tempCart.push(part2)
        });
        setpartsList(tempCart);
    };

    return(
        <div>
            <div className="navigation">
                Computer Parts Store
                <div style={{float: 'right',position: 'relative'}}>
                    <a onClick={()=>navigate('cart')}>
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