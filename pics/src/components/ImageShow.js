function ImageShow({image}) {
  return (
  <div className="card">
    <img src={image.urls.small} alt={image.alt_description}/>
    </div>
  );
}

export default ImageShow;
