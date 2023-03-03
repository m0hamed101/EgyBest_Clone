import "../Body/body.css";
import Search from "./search/Search";
import SliderComponent from "./Swiper/Slider";

export const Body = (props) => {


  return (
    <div className="body">
      <Search />
      <div className="body_title"> الاكثر مشاهده</div>
      <div className="body_cards">
        <SliderComponent start= {0} end= {10} movies ={props.movies} /> 
      </div>

      <div className="body_title">احدث الافلام</div>
      <div className="body_cards">
        <SliderComponent start= {11} end= {21} movies ={props.movies} /> 
      </div>

      <div className="body_title">اعلي التقييمات</div>
      <div className="body_cards">
        <SliderComponent start= {20} end= {30} movies ={props.movies} /> 
      </div>

      <div className="body_title">احدث الاضافاات </div>
      <div className="body_cards">
        <SliderComponent start= {13} end= {27} movies ={props.movies} /> 
      </div>
    </div>
  );
};
