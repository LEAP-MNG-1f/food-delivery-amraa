"use client";

import React, { useState, useEffect } from "react";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import BookLogo from "../../../public/svg/Booklogo";
import { Card } from "./Card";
import { Starlogo } from "../../../public/svg/Starlogo";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type foods = {
  id: number;
  title: string;
  amount: number;
  img: string;
  ingredient?: string;
};

export default function Hero() {
  const [foodsData, setFoodsData] = useState<foods[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/foods");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const datas: foods[] = await response.json();
        setFoodsData(datas.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  console.log(foodsData);

  const renderCategory = (categoryName: string, items: foods[]) => (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-[1200px] flex justify-between items-center py-4">
        <div className="flex items-center gap-1">
          <Starlogo />
          <div className="text-[#272727] text-2xl font-bold">
            {categoryName}
          </div>
        </div>
        <div className="flex">
          <div>Бүгдийг харах</div>
          <button>
            <ArrowForwardIosRoundedIcon style={{ color: "#18BA51" }} />
          </button>
        </div>
      </div>
      <div className="w-[1200px] flex justify-between">
        {items?.map((dish, index) => (
          <Card
            key={index}
            title={dish.title}
            img={dish.image}
            price={dish.amount}
            ingredient={dish.ingredient}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center pb-20">
      <div className="card rounded-none relative w-full bg-green-500 grid h-[96vh] place-items-center">
        <img
          className="h-full w-full absolute object-cover"
          src="Zurag.png"
          alt=""
        />
        content
      </div>
      <div className="flex w-[1200px] justify-between py-24">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="max-w-max flex p-4 flex-col justify-center items-start gap-4 flex-1 self-stretch rounded-lg border border-[#D6D8DB] bg-white shadow-m"
            >
              <div className="p-4">
                <BookLogo />
              </div>
              <div>
                <div className="text-[#272727] font-poppins text-[18px] font-bold leading-normal">
                  Хүргэлтийн төлөв хянах
                </div>
                <div className="text-[#272727] font-sf-pro text-[14px] font-normal leading-normal">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-20">
        {renderCategory("Хямдралтай", foodsData)}
        {/* {renderCategory("Үндсэн хоол", foods.slice(4, 8))}
        {renderCategory("Салад ба зууш", foods.slice(8, 12))}
        {renderCategory("Амттан", foods.slice(12, 16))} */}
      </div>
    </div>
  );
}
