import { Parallax } from "react-parallax";
import guillermo from "../images/guillermo-ferla-Oze6U2m1oYU-unsplash.jpg";

const Image2 = () => (
    <Parallax className="image" bgImage={guillermo} strength={800}>
        <div className="content">
            <span className="img-txt">Travelling to space.</span>
        </div>
    </Parallax>
);
export default Image2;
