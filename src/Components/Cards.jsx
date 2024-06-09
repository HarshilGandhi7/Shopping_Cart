import { useDispatch, useSelector } from "react-redux";
import { addProduct,removeProduct } from "../redux/CartSlice";
import { toast } from "react-hot-toast"

export default function Cards({index,item}){

    const {cart}=useSelector((state)=>state);
    
    const dispatch=useDispatch();
    const title=item.title.substr(0,17);
    const des=item.description.substr(0,51);

    function addItemListener(){
        dispatch(addProduct(item));
        toast.success("Item added to the cart");   
    }

    
    function removeItemListener(){
        dispatch(removeProduct(item.id));
        toast.error("Item removed from the cart!");
    };
    

    return(
        <div key={index} className="border p-4 flex flex-col items-center justify-between rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] group mb-4 hover:scale-[1.16] hover:hover:shadow-[0px_0px_95px_53px_#00000024] transition duration-300 ease-in ">
            <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">{title}...</h2>
            <div className="text-xs mb-4 w-[65%] mx-auto text-gray-400">{des}...</div>
            <div className="mb-4">
            <img src={item.image} alt={item.title} className="w-[126px] h-[180px]" />
            </div>
            <div className="flex flex-row justify-between items-center w-full px-4">
                <div className="text-lg font-semibold text-green-500">${item.price}</div>
                {
                    cart.some((p)=>(p.id===item.id))
                    ?<button onClick={removeItemListener} className="group py-1 px-3 border group-hover:text-white group-hover:bg-slate-900  transition duration-300 ease-in  border-gray-900 rounded-2xl text-gray-900">Remove Item</button>
                    :<button onClick={addItemListener} className="group py-1 px-3 border group-hover:text-white group-hover:bg-slate-900  transition duration-300 ease-in  border-gray-900 rounded-2xl text-gray-900">Add to Cart</button>
                }   
            </div>
      </div>
    )
}