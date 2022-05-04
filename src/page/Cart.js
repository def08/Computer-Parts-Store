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
                <div className="Cartitems">
                    {}
                </div>
            </div>
        </div>
    )
}