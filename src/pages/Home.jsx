import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainer } from "../store/slices/trainerName.Slice";
import inicio from "/videos/inicio.mp4";
import '../pages/styles/home.css'
import {  useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNameTrainer(e.target.name.value.trim()));
    e.target.name.value = "";
    navigate ('/pokedex')
  };
  return (
    <>
      <div className="main">
        <video
          src={inicio}
          autoPlay
          loop
          muted
          playsInline
          className="back__video"
        />
      </div>
      <div className="home" >
        <img className="home__img" src="./images/poki.png" alt="" />
        <h1 className="home__h1">¡Hi Trainer!</h1>
        <p className="home__p">To Start, Tell Me Your Name Pokemon Trainer</p>
        <form  className="home__form"     onSubmit={handleSubmit}>
          <input  className="home__input"    id="name" type="text" placeholder=" Insert Name" />
          <button className="home__btn"  >Start</button>
        </form>
        <footer className="home__footer">

        </footer>
      </div>
    </>
  );
};

export default Home;
