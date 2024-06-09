import Navbar from "./Navbar"
import  {products}  from "../data"
import Cards from "./Cards";
export default function Home(){
    console.log(products);
    return (
        <div>
            <Navbar></Navbar>
            <div className="container w-4/5 mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 ">
            {products.map((item, index) => (
                <Cards key={index} item={item} />
            ))}
        </div>
        </div>
    )
}