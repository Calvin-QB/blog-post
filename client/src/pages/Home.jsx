import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 0,
      image: "https://via.placeholder.com/150",
      title: "Post 1",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Post 2",
      description:
        "This is the description for Post 2.dddsdf asdasdasfasdfasdfaasdfadfsa",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__480.jpg",
      title: "Post 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet tempus sapien. Duis sed ullamcorper eros. Cras et erat tempor, mollis ante ut, condimentum lacus. Pellentesque et consequat massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus maximus ligula luctus, blandit erat bibendum, lacinia libero. Sed volutpat lectus mauris, ac efficitur tellus vestibulum eget. Donec id ultricies erat. Donec aliquam, leo quis pellentesque semper, ex mi sagittis purus, vitae venenatis libero nulla condimentum velit. Nunc ligula dolor, sollicitudin ut nisl et, rhoncus feugiat ex. Sed varius, augue non imperdiet posuere, sapien lorem pulvinar dui, sit amet sodales nibh velit eu dui. Aliquam eleifend a eros ut eleifend. Maecenas quis accumsan mauris. Sed eget vestibulum arcu. Quisque cursus nulla elit, a condimentum arcu congue in. Aliquam ornare erat elit, in pulvinar justo rhoncus ut. Nunc malesuada tempor metus sit amet ultrices. Donec vel leo in quam vestibulum pulvinar non quis urna. Vivamus sed erat sapien. Suspendisse blandit et enim tristique tempor. Mauris faucibus aliquam mi quis auctor. In eget sodales quam. Ut eros risus, semper a pretium a, viverra vel purus. Donec sed felis ac est efficitur lobortis. Aliquam malesuada neque a ipsum dictum dignissim. Mauris lorem eros, maximus vehicula lacinia eget, malesuada id dui. Etiam vitae metus nisi. Nunc blandit turpis vulputate augue sodales, sit amet sollicitudin urna venenatis. Mauris enim nibh, tristique convallis condimentum ac, viverra posuere leo.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Post 4",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quod in hic accusantium modi velit id neque nulla nihil! Cupiditate alias ipsa quia non odio ratione provident esse iusto error.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Post 5",
      description: "This is the description for Post 5.",
    },
  ];

  return (
    <div className="mx-32">
      Home
      <div className="flex flex-col justify-center gap-32">
        {posts.map((post, id) => (
          <div
            className={`flex justify-between gap-32 ${
              id % 2 == 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={post.id}
          >
            <img
              className="w-96 outline object-contain object-top "
              src={post.image}
              alt={post.title}
            />
            <div className="flex-1 border flex flex-col ">
              <Link className="outline self-start" to={`/post/${post.id}`}>
                <h1 className="border text-4xl font-medium">{post.title}</h1>
              </Link>
              <div className="outline ">{post.description}</div>

              <button className="outline ">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
