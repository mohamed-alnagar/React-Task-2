import f1 from "../../assets/f1.png"; 
import f2 from "../../assets/f2.png"; 
import f3 from "../../assets/f3.png"; 
import f4 from "../../assets/f4.png"; 
import f5 from "../../assets/f5.png"; 
import f6 from "../../assets/f6.png"; 
import "../FurnitureList/FurnitureList.css";
function FurnitureList(){
    const furnitureData=[
        { title: "Brown Chair Design", price: 100, img: f1 },
  { title: "Double Bed Design", price: 200, img: f2 },
  { title: "House Chair Design", price: 200, img: f3 },
  { title: "Brown Table Design", price: 100, img: f4 },
  { title: "Blue Chair Design", price: 200, img: f5},
  { title: "Brown Table Design", price: 200, img: f6 },
];
    return (
        <section className="furniture-section">
            <h2>Our Furniture</h2>
            <p>which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an</p>
            <div className="furniture-grid">
                {furnitureData.map((item,index)=>(
                    <div key={index} className="card">
                        <img src={item.img} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <p>${item.price.toFixed(2)}</p>
                        <a href="#">Buy Now</a>
                        </div>
                ))}
            </div>
        </section>

    )
}

export default FurnitureList;