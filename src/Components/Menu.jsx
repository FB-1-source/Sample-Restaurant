import React from "react";
import item1img from "../images/Pasta alla Norma.jpeg";
import item2img from "../images/SPAGHETTI ALLA PUTTANESCA.jpeg";
import item3img from "../images/Spaghetti aglio e olio.jpeg";
import item4img from "../images/Amatriciana.jpeg";
import item5img from "../images/cacio e pepe.jpeg";
import item6img from "../images/Spaghetti alle vongole.jpeg";
import item7img from "../images/pasta carbonara.jpeg";
import item8img from "../images/T.jpeg";

function Menu() {
  return (
    <div>
      <div className="Entiremenu">
        <div className="Menu">
          <div className="item1">
            <div className="item1img">
              <img src={item1img}></img>
            </div>
            <div className="ingname">
              <h1>Pasta alla Norma</h1>
            </div>
            <h3>
              Ingredients: Macaroni,Tomato Sauce,Eggplant,Onion,Ricotta
              Salata,Olive Oil,Garlic
            </h3>
          </div>

          <div className="item1">
            <div className="item1img">
              <img src={item2img}></img>
            </div>
            <div className="ingname">
              <h1>Spaghetti alla puttanesca</h1>
            </div>
            <h3>
              Ingredients: Spaghetti, Tomato, Capers, Olive, Hot Pepper,
              Preserved Anchovy, Garlic Parsley
            </h3>
          </div>

          <div className="item1">
            <div className="item1img">
              <img src={item3img}></img>
            </div>
            <div className="ingname">
              <h1>Spaghetti aglio e olio</h1>
            </div>
            <h3>
              Ingredients: Spaghetti, Olive Oil, Hot Pepper, Garlic, Parsley
            </h3>
          </div>

          <div className="item1">
            <div className="item1img">
              <img src={item4img}></img>
            </div>
            <div className="ingname">
              <h1>Amatriciana</h1>
            </div>
            <h3>
              Ingredients: Spaghetti, Pecorino Romano, Guanciale, Pomodoro San
              Marzano, White Wine
            </h3>
          </div>
        </div>

        {/* Menu 2 */}

        <div className="Menu2">
          <div className="item1">
            <div className="item1img">
              <img src={item5img}></img>
            </div>
            <div className="ingname">
              <h1>Cacio e Pepe</h1>
            </div>
            <h3>Ingredients: Spaghetti, Pecorino Romano, Black Pepper</h3>
          </div>

          <div className="item1">
            <div className="item1img">
              <img src={item6img}></img>
            </div>
            <div className="ingname">
              <h1>Spaghetti alle vongole</h1>
            </div>
            <h3>Ingredients: Spaghetti, Clams, Garlic, Parsley, Olive Oil</h3>
          </div>

          <div className="item1">
            <div className="item1img">
              <img src={item7img}></img>
            </div>
            <div className="ingname">
              <h1>Pasta Carbonara</h1>
            </div>
            <h3>
              Ingredients: Spaghetti, Guanciale, Pecorino, Egg, Black Pepper
            </h3>
          </div>

          <div className="item1">
            <div className="item1img">
              <img src={item8img}></img>
            </div>
            <div className="ingname">
              <h1>Tagliatelle al ragù alla bolognese</h1>
            </div>
            <h3>
              Ingredients: Tagliatelli, Beef, Pancetta, Butter, Carrot, Celery,
              Onion, Tomato
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
