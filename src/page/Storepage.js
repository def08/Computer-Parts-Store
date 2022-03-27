import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useCart } from "../provider/Provider";

export const Storepage1 = () =>{
    const { Cart, setCart } = useCart();
    const [partsList, setpartsList] = useState([
        {
            PartName: 'Textured Keyboard KeyCaps',
            Image:'',
            Price: '15',
            Quantity: '13',
        },{
            PartName: 'Female USB B Port',
            Image:'',
            Price: '15',
            Quantity: '5',
        },{
            PartName: 'USB C Port',
            Image:'',
            Price: '30',
            Quantity: '10',
        },{
            PartName: 'LED light strips',
            Image:'',
            Price: '20',
            Quantity: '2',
        }
    ]);

    

    const AddtoCart = (part) =>{
        setCart ([...Cart, part])
        let Partincart = false;
        Cart.filter((i)=>{
            if (i.PartName == part.PartName){
                Partincart = true;
            }
        })
        updateCart(part)
    };

    const updateCart = (part) =>{
        let tempCart = [];
        Cart.forEach((element)=> {
            if(element.PartName == part.PartName) element.total = element.total - 1;
            tempCart.push(element)
        });
        setpartsList(tempCart);
    }

    return(
        <div>
            <div className="navigation">
                Computer Parts Store
                <div style={{float: 'right',position: 'relative'}}>
                    <a href='./Cart.js' style={{float: 'right', position: 'relative'}}>
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