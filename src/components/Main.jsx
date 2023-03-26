import Photo from "../assets/photo.png";
import "../styles/Main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <img className="photo" src={Photo} alt="photos" />
        <div className="text-container">
          <h1 className="experiences">Online Experiences</h1>
          <p className="join">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
