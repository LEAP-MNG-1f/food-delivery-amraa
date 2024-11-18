"use client";
import React, { useState } from "react";
import FoodModal from "./FoodModal";

type CardPropsType = {
  img?: string;
  title?: string;
  price?: number;
  discount?: number;
  ingredient?: string;
};

export const Card = (props: CardPropsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const food = {
    title: props.title,
    description: props.ingredient,
    price: props.price,
    img: props.img,
  };

  return (
    <div className="w-[282px] flex flex-col gap-[14px] ">
      <div
        onClick={() => setIsModalOpen(true)}
        className="card rounded-lg cursor-pointer"
      >
        <img
          src={props.img}
          className="rounded-2xl object-cover h-48 bg-lightgray shadow-md"
        />
        <div>
          <div className="text-black font-semibold text-lg ">{props.title}</div>
          <div className="text-[#18BA51] font-semibold text-lg ">
            {props.price}₮
          </div>
        </div>
      </div>
      <FoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        food={food}
      />
    </div>
  );
};
