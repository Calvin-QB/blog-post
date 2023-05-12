import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="mx-32">
      <div className=" flex flex-row gap-20">
        <div className=" flex-[4] overflow-hidden h-80">
          <input
            className="border w-full mb-5 h-12"
            type="text"
            placeholder="Title"
          ></input>
          <ReactQuill
            className="h-full"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="flex-[2] flex flex-col">
          <div className="border">
            <h1 className="font-bold text-2xl ">Category</h1>
            <div className="flex flex-row">
              <input type="radio" name="category" id="cheese"></input>
              <label className="" for="cheese">
                Do you like cheese?
              </label>
            </div>
            <div className="flex flex-row">
              <input type="radio" name="category" id="cake"></input>
              <label className="" for="cake">
                Do you like cake?
              </label>
            </div>
            <div className="flex flex-row">
              <input type="radio" name="category" id="chocolate"></input>
              <label className="" for="chocolate">
                Do you like chocolate?
              </label>
            </div>
          </div>
          <div>i2</div>
        </div>
      </div>
    </div>
  );
};

export default Write;
