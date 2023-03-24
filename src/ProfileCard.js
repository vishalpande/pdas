import React from "react";

export default function ProfileCard({ title, handle, image,description }) {
  //one way
  // const title=props.title;
  // const handle=props.handle;

  //second way

  // const{title,handle}=props;

  return (
    <div className="card">
      <div className="card-image"></div>
      <figure className="image is-4by1">
        <img src={image} alt="Pdas logo" />
      </figure>

      <div className=" card-content">
        <div className="media-content">
          <p>{title}</p>
          <p>{handle}</p>
        </div>
        <div className="content">
            <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
