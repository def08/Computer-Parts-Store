import { useState } from "react";
import { BsCart4 } from "react-icons/bs";

export const Storepage1 = () =>{
    const [Cart, setCart] = useState();

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
    ])

    

    const AddtoCart = (Part) =>{
        setCart ([...Cart, Part])
        let Itemincart = false;
        Cart.filter((i)=>{
            if (i.PartName == Part.PartName){
                Itemincart = true;
            }
        })
        updateCart(Part)
    }

    const updateCart = (Part) =>{
        let previewCart = [];
        Cart.forEach((element)=> {
            if(element.PartName == Part.PartName){
                element.total = element.total - 1;
            }
            previewCart.push(element)
        })
    }

    return(
        <div>
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
            </div>
            {partsList.map((part, index)=>(
                <div className="itemcards" key={index}>
                    <img src={part.Image} alt=""/>
                    <div> Name: {part.PartName} </div>
                    <div> {"$"} {part.Price} </div>
                    <div> Quantity: {part.Quantity} </div>
                    <button id='add' className="button" onClick={AddtoCart()}>Add to Cart</button> 
                </div> 
                  
            ))}
        </div>            
    )
}