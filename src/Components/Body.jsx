import React from "react";
import img from "..//images/canva-photo-editor.png";
import img2 from "../images/spaghetti_jpg.webp";
import img3 from "../images/chicken alfredo.jpeg";
import img4 from "../images/resturant.jpg";

function Body() {
  return (
    <div>
      <div className="images">
        <img className="img1" src={img}></img>
        <img className="img2" src={img2}></img>
        <img className="img3" src={img3}></img>
      </div>
      <div className="about">
        <h1>About</h1>
        <div className="section1">
          <img src={img4} className="img4"></img>
          <p className="p1">
            {" "}
            Pasta Galore serves authentic italian cusine with fresh
            ingredients.Pasta galore offers many pasta varieties. We are
            expanding our menu and will be adding new dishes. We were slated to
            open in 2021 but now our resturant will open in January 2022. We
            look forward to seeing you then!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
