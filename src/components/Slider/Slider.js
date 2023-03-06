import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {sliderImages} from '../../utils/images';

const Slider = () => {
// Renders the hero slider component
return (
<div className="hero-slider">
{/* Renders the slider item */}
<div className='hero-slider-item'>
<img src={sliderImages[1]} alt="" />
</div>
</div>
)
}

export default Slider;




