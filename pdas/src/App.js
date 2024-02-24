import ProfileCard from "./Profile";
import "bulma/css/bulma.css";
import Alexa from "./media/alexa.png";
import Cortana from "./media/cortana.png";
import Siri from "./media/siri.png";
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard 
              title={"Alexa"} 
              handle={"@Alexa99"} 
              photo={Alexa} 
              description={"Alexa was created by Amazon and helps you buy things."}/>
          </div>
          <div className="column is-4">
            <ProfileCard
              title={"Cortana"} 
              handle={"@Cortana32"} 
              photo={Cortana} 
              description={"Cortana was made by Microsoft. And who knows what is does?"}/>
          </div>
          <div className="column is-4">
            <ProfileCard 
              title={"Siri"} 
              handle={"@Siri01"} 
              photo={Siri}
              description={"Siri was made by Apple and is not getting much updates now."}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
