import "./explor.css";
import JumbingMc from "../assets/jumbing.jpg";
import Cars3 from "../assets/cars3.jpg";
import Last from "../assets/last.jpg"
export default function Explore() {
  return (
    <div className="main-explor-container">
      <h2>Lightning McQueen</h2>
      <div className="conclusion">
        <p>
          Lightning McQueen is a fictional anthropomorphic stock car and the
          protagonist of the Disney/Pixar Cars franchise. He was developed by
          John Lasseter and co-director Joe Ranft from a story concept by Jorgen
          Klubien. Lightning's appearances include the feature films Cars, Cars
          2, and Cars 3, as well as the animated series Cars Toons and Cars on
          the Road. He is also a playable character in each of the Cars video
          game installments. Primarily voiced by Owen Wilson, Lightning is
          recognizable by his red body with yellow and orange lightning bolt
          stickers featuring his racing number on his sides.
        </p>
        <div>
          <img src={JumbingMc} alt="JumbingMc" />
        </div>
      </div>
      <div className="second-conclusion">
        <p>
          In Cars, Lightning begins as a talented but cocky rookie in the Piston
          Cup racing series who becomes stranded in the small town of Radiator
          Springs, where he learns about humility and friendship from the
          locals. Over his professional racing career, he achieves several
          Piston Cup victories. In Cars 2, he competes in the World Grand Prix,
          while his friend Tow Mater is unwittingly dragged into a spy mission.
          In Cars 3, he struggles to come to terms with retirement and assumes
          the role of Cruz Ramirez's mentor.
        </p>
        <div>
          <img src={Cars3} alt="Cars3" />
        </div>
      </div>
      <div className="Last">
        <p>
          Despite receiving a mixed reaction from critics in the first film,
          Lightning has become a recognizable face and mascot of the Cars
          franchise. He has been widely merchandised in the form of branded toy
          cars and other products. He has been mentioned in commentary by NASCAR
          racing drivers, including Kyle Busch and Chris Buescher, and his
          achievements have been discussed by sports journalist Stephen A.
          Smith. Critics have described him as one of the greatest or most
          iconic cars in film.
        </p>
        <div className="IMg-mc">
          <img src={Last} alt="last" />
        </div>
      </div>
    </div>
  );
}
