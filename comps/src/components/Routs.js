import useNavigation from "./Hooks/useNavigation";

const Route = ({path, children}) => {
  const {currentPath} = useNavigation();
  if(currentPath === path){
    return children;
  }
  return null
}
export default Route;