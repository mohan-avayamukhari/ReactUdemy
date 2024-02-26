import "./imageList.css"
import ImageShow from "./ImageShow";

const ImageList = ({images}) => {
  return (
    <div className="image-list">
      {images.map(image => <ImageShow image={image} key={image.id}/>)}
    </div>
  );
}

export default ImageList;
