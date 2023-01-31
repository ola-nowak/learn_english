import BasicBoy from "../assets/boy-front-basic.png";
import SpeechBubble from "../assets/speech-bubble.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <img src={BasicBoy} alt="boy" className="home-boy" />
        <img src={SpeechBubble} className="speech-bubble" alt="speech bubble" />
      </div>
    </>
  );
}
export default Home;
