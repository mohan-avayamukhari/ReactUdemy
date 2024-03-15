import Button from "../components/Button"
import { GoBellFill } from "react-icons/go";
import { BsCloudDownloadFill } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";

const ButtonPage = () => {
  return(
    <div>
    <div>
    <Button 
    secondary
    rounded 
    outline 
    className="mb-5"
    >
      <GoBellFill />
      Click me!!
      </Button>
  </div>
  <div>
    <Button danger outline>
      <BsCloudDownloadFill />
      Buy Now!
      </Button>
  </div>
  <div>
    <Button warning>
      <GoDatabase />
      See Deal!
      </Button>
  </div>
  <div>
    <Button secondary outline>Hide Adds!</Button>
  </div>
  <div>
    <Button primary rounded>Something!</Button>
  </div>
    </div>
  )
}

export default ButtonPage;