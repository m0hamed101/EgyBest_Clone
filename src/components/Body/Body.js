import "../Body/body.css";
import Search from "./search/Search";
import SliderComponent from "./Swiper/Slider";

export const Body = (props) => {


  return (
    <div className="body">
      <Search />
      <div className="body_title">الاكثر مشاهده</div>
      <div className="body_cards">
        <SliderComponent movies ={props.movies} /> 
      </div>

      <div className="body_title">احدث الافلام</div>
      <div className="body_cards">
        <SliderComponent movies ={props.movies} /> 
      </div>
    </div>
  );
};
