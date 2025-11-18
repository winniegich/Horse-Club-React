import "./Blog.css";
import Img1 from "../assets/images/blog-img-1.jpg";
import Img2 from "../assets/images/blog-img-2.jpg";
import Img3 from "../assets/images/blog-img-3.jpg";
import Img4 from "../assets/images/blog-img-4.jpg";
import Img5 from "../assets/images/blog-img-5.jpg";
import Img6 from "../assets/images/blog-img-6.jpg";

interface Blog {
  image: string;
  chips: string[];
  title: string;
  synopsis: string;
  date: string;
  author: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="blog-card">
      <div className="blog-card-img-wrapper">
        <img
          src={blog.image}
          alt="featured"
          className="blog-card-featured-image"
        />
      </div>

      <div className="blog-card-chips-container">
        {blog.chips.map((chip, index) => (
          <span key={index} className="blog-card-chip">
            {chip}
          </span>
        ))}
      </div>

      <h3 className="blog-card-title-title">{blog.title}</h3>

      <p className="blog-synopsis">{blog.synopsis}</p>

      <div className="blog-card-meta-information">
        <div className="blog-card-meta">
          <i className="fa-solid fa-calendar-days"></i>
          <p dangerouslySetInnerHTML={{ __html: blog.date }} />
        </div>

        <div className="blog-card-meta">
          <i className="fa-solid fa-user"></i>
          <a href="#">{blog.author}</a>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogs: Blog[] = [
    {
      image: Img1,
      chips: ["travel", "lifestyle"],
      title: "Lorem ipsum dolor sit amet.",
      synopsis:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur voluptas repellat.",
      date: "31<sup>st</sup> September 2025",
      author: "john doe",
    },
    {
      image: Img2,
      chips: ["travel", "lifestyle", "animals", "accommodation"],
      title: "Amet consectetur adipisicing elit",
      synopsis:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur voluptas repellat.",
      date: "30<sup>th</sup> September 2025",
      author: "emma clerk",
    },
    {
      image: Img3,
      chips: ["travel", "lifestyle", "accommodation"],
      title: "Eveniet aliquam quam animi",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur voluptas repellat.",
      date: "28<sup>th</sup> September 2025",
      author: "brad paisley",
    },
    {
      image: Img4,
      chips: ["accommodation"],
      title: "Similique odio eveniet aliquam quam",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur voluptas repellat.",
      date: "27<sup>th</sup> September 2025",
      author: "charlie pride",
    },
    {
      image: Img5,
      chips: ["lifestyle", "animals"],
      title: "Similique odio eveniet aliquam quam",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur voluptas repellat.",
      date: "26<sup>th</sup> September 2025",
      author: "george washington",
    },
    {
      image: Img6,
      chips: ["lifestyle", "animals", "accommodation"],
      title: "Quam animi beatae eligendi.",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur voluptas repellat.",
      date: "25<sup>th</sup> September 2025",
      author: "martin luther",
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="title">
        <p className="title-sub">latest from our blog</p>
        <h2 className="title-main">our blog</h2>
      </div>

      <div className="blog-cards-container">
        {blogs.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
