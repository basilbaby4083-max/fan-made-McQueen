import data from "./mcqueen.json";
import "./Gallery.css";
import myVideo from "../videos/tumbnail.mp4";
import Logo from "../assets/Logo.png"

export default function Gallery() {
  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="gallery">
      <h1>
        <img src={Logo} alt="logo"  className="Logo"/> 
        McQueen Gallery</h1>

      <div className="gallery-grid">
        {data.images.map((img) => (
          <div className="card" key={img.id}>
            <img src={img.url} alt={`mcqueen-${img.id}`} className="main-image" />


            <div className="overlay">

            </div>
          </div>
        ))}
      </div>

      <div className="video-box">
        <video autoPlay loop className="video">
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}