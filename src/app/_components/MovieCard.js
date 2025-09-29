import { Staricons } from "../_icons/Star";
export const MovieCard = (props) => {
  const { imgSrc, rating, title } = props;
  return (
    <div className="w-[229px] h-[439px] rounded-lg ">
      <div className="mt-10">
        <img src={imgSrc} alt="movie"></img>
      </div>
      <div className="flex flex-col bg-gray-100 w-[230px] h-[95px]">
        <div className="flex items-center">
          <Staricons />
          <span>{rating}</span>
          <span>/10</span>
        </div>
        <div>{title}</div>
      </div>
    </div>
  );
};
