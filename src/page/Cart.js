import { BsBoxArrowLeft } from "react-icons/bs";
import { Storepage1 } from "Storepage.js";

export const Cartpage1 = () => {
function ItemsInCart(state='Added to Cart') {
    
}
    return(
        <div>
            <div>
                <div className="navigation">
                    Computer Parts Store
                    <a href='./Storepage.js' className="storepage" style={{float: 'left'}}>
                    <BsBoxArrowLeft/>
                    </a>
                </div>
                <div className="Cartitems">

                </div>
            </div>
        </div>
    )
}