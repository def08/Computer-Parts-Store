import { BsBoxArrowLeft } from "react-icons/bs";

export const Cartpage1 = () => {
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