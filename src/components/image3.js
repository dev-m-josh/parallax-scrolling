import { Parallax } from "react-parallax";
import Nasa2 from "../images/nasa-2.jpg";

const Image3 = () => (
    <Parallax className="image" bgImage={Nasa2} strength={800}>
        <div className="content">
            <span className="img-txt">Travelling to space.</span>
        </div>
    </Parallax>
);
export default Image3;
