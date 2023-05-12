import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
//https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg
const SinglePost = () => {
  return (
    <div className="mx-32">
      SinglePost
      <div className="flex flex-row gap-52">
        <div className="flex-[3] outline flex flex-col gap-3">
          <img
            className=" outline "
            src="https://i.redd.it/zf4z6utfezua1.png"
          ></img>
          <div className="flex flex-row gap-2 outline items-center">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src="https://i.redd.it/plaizktmgbwa1.jpg"
            ></img>
            <div className="flex flex-col">
              <div>PomPom</div>
              <div>Posted 2 days ago</div>
            </div>
            <Link to={`/write?edit=2`}>
              <div>Edit</div>
            </Link>
            <div>Delete</div>
          </div>
          <h1 className="font-bold text-6xl">Header</h1>
          <p className="leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            nesciunt nostrum mollitia debitis libero, alias pariatur voluptas,
            atque dignissimos in sed! Quaerat deserunt aliquid, obcaecati facere
            neque ducimus molestiae rem? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus, molestias. Sint placeat quas dicta,
            quos similique aperiam eum tempora velit fugiat illum. Dolores id ab
            nemo veritatis recusandae maiores similique. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Placeat, sequi voluptatem minus
            et in provident? Quibusdam laudantium sint magni ducimus quasi
            consectetur eos, deserunt aliquam? Iure quisquam delectus eos
            maxime.
          </p>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePost;
