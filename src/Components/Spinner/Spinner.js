import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Spinner() {
    return (
        <Loader type="ThreeDots" color="#00BFFF" height={40} width={40}/>
    )
}