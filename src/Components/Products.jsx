import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeProduct } from "../redux/CartSlice";
import toast from "react-hot-toast";

export default function Products(){
    const {cart}=useSelector((state)=>state)
    const dispatch=useDispatch();

    return (
        <div className="mb-20">
            {cart.map((item,index)=>{
                return (
                <div key={index}>
                <div>
                    { index!==0 &&
                        <div className="w-full border my-10 border-gray-400"></div>
                    }
                </div>
                <div className="flex flex-row gap-10 mr-5 mb-5"> 
                    <div><img src={item.image} height={150} width={220} alt="" /></div>
                    <div>
                        <div className="text-xl font-semibold mb-4 text-gray-700">{item.title}</div>
                        <div className="text-lg mb-4  mx-auto text-gray-800">{item.description.substr(0,80)}...</div>
                        <div className="flex flex-row justify-between">
                            <div className="text-lg font-bold text-green-600">${item.price}</div>
                            <button className="bg-red-200 px-3 py-2 rounded-full hover:bg-red-600 group"
                             onClick={()=>{
                                    dispatch(removeProduct(item.id))
                                    toast.error("Item removed from the cart!");
                                }}>
                            <FontAwesomeIcon icon={faTrash} className="text-red-500 group-hover:text-white" size='sm' />
                            </button>
                        </div>
                    </div>
                </div>
                </div>)
            })}
        </div>
    )
}