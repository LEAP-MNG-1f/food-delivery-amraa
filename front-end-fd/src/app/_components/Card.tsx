"use client";
import React, { useState } from "react";
import FoodModal from "./FoodModal";

type CardPropsType = {
  _id?: string;
  img?: string;
  name?: string;
  price?: number;
  discount?: number;
  ingredient?: string;
  cart: any[]; // Cart array passed from parent
  setCart: React.Dispatch<React.SetStateAction<any[]>>; // Function to update the cart
};

export const Card = (props: CardPropsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const food = {
    _id: props._id,
    name: props.name,
    description: props.ingredient,
    price: props.price,
    img: props.img,
  };

  return (
    <div className="w-[282px] flex flex-col gap-[14px]">
      <div
        onClick={() => setIsModalOpen(true)}
        className="card rounded-lg cursor-pointer"
      >
        <img
          src={props.img}
          className="rounded-2xl object-cover h-48 bg-lightgray shadow-md"
        />
        <div>
          <div className="text-black font-semibold text-lg">{props.name}</div>
          <div className="text-[#18BA51] font-semibold text-lg">
            {props.price}₮
          </div>
        </div>
      </div>
      <FoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        food={food}
        cart={props.cart}
        setCart={props.setCart}
      />
    </div>
  );
};
