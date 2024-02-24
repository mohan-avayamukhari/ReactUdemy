import "bulma/css/bulma.css";

const ProfileCard = ({title, handle, photo, description}) => {
  return(
    <div className="card">
      <div className="card-image"></div>
      <figure className="image is-1by1">
        <img src={photo} alt="personal assistant"/>
      </figure>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">
          {description}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;