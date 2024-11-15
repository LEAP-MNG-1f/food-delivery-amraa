import React from "react";

type CardPropsType = {
  img?: string;
  title?: string;
  price?: number;
  discount?: number;
};

export const Card = (props: CardPropsType) => {
  return (
    <div className="w-[282px] flex flex-col gap-[14px] ">
      <img src={props.img} className="rounded-2xl h-48 bg-lightgray shadow-md" />
      <div>
        <div className="text-black font-semibold text-lg ">{props.title}</div>
        <div className="text-[#18BA51] font-semibold text-lg ">
          {props.price}₮
        </div>
      </div>
    </div>
  );
};
