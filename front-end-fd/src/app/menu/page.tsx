"use client";

import React, { useEffect, useState } from "react";
import { HeaderPart } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Card } from "../_components/Card";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient: string;
};

type FoodResponse = {
  success: boolean;
  data: Food[];
};

export default function page() {
  const [foodData, setFoodData] = React.useState<Food[]>([]);
  const [cart, setCart] = useState<any[]>([]); // Cart state
  const fetchDataFood = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_POINT}/api/foods`
      );
      const data: FoodResponse = await response.json();
      setFoodData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFood();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <HeaderPart />
      <main className="container flex flex-col items-center mt-2 mb-14">
        <div className="w-full flex py-8  justify-between">
          <button className="btn btn-outline text-lg border-[#D6D8DB] hover:bg-[#18BA51] hover:border-[#D6D8DB] py-2 px-4 w-[16.2vw] ">
            Breakfast
          </button>

          <button className="btn btn-outline text-lg border-[#D6D8DB] hover:bg-[#18BA51] hover:border-[#D6D8DB] py-2 px-4 w-[16.2vw] ">
            Soup
          </button>
          <button className="btn btn-outline text-lg border-[#D6D8DB] hover:bg-[#18BA51] hover:border-[#D6D8DB] py-2 px-4 w-[16.2vw] ">
            Main course
          </button>
          <button className="btn btn-outline text-lg border-[#D6D8DB] hover:bg-[#18BA51] hover:border-[#D6D8DB] py-2 px-4 w-[16.2vw] ">
            Dessert
          </button>
        </div>
        <div className="container flex flex-wrap justify-between gap-y-6">
          {foodData.map((dish) => (
            <Card
              key={dish._id}
              name={dish.name}
              img={dish.image}
              price={dish.price}
              ingredient={dish.ingredient}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
