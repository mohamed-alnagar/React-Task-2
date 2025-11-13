import blog1 from "../../assets/b1.jpg"
import blog2 from "../../assets/b2.jpg";
import blog3 from "../../assets/b3.jpg";
import "../BlogSection/BlogSection.css";

function BlogSection () {
    const blogs = [
  {
    title: "Look even slightly believable.",
    text: "Alteration in some form by injected humour.",
    img: blog1,
  },
  {
    title: "Look even slightly believable",
    text: "Alteration in some form by injected humour.",
    img: blog2,
  },
  {
    title: "Look even slightly believable",
    text: "Alteration in some form by injected humour.",
    img: blog3,
  },
];
    return (
        <section className="blog">
            <h2>Latest Blog</h2>
            <div className="blog-grid">
                {blogs.map((blog,index)=>(
                    <div key={index} className="blog-card">
                        <img src={blog.img} alt={blog.title} />
                        <h3>{blog.title}</h3>
                        <p>{blog.text}</p>
                        <button className="btn-blue">Read More</button>
                    </div>
                    
                ))}
            </div>
        </section>

    )
}

export default  BlogSection;