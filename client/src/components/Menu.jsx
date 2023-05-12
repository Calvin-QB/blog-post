import React from "react";

const Menu = () => {
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
      description: "This is the description for Post 3.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Post 4",
      description: "This is the description for Post 4.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Post 5",
      description: "This is the description for Post 5.",
    },
  ];
  return (
    <div className="flex-1  flex flex-col gap-10">
      {posts.map((post, id) => (
        <div className="outline">
          <img className="" src={post.image}></img>
          <h2>{post.title}</h2>
          <button className=" ">Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
