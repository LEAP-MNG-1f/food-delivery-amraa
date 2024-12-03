"use client";

import React, { useState, useEffect } from "react";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import BookLogo from "../../../public/svg/Booklogo";
import { Card } from "./Card";
import { Starlogo } from "../../../public/svg/Starlogo";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Category } from "@mui/icons-material";

type smallCate = {
  _id: string;
};

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient?: string;
  categoryId: smallCate;
};

type ApiResponse = {
  data: Food[];
};

type Category = {
  _id: string;
  name: string;
  categoryId: string;
};

type CategoryResponse = {
  success: boolean;
  data: Category[];
};

export default function Hero() {
  const [foodsData, setFoodsData] = useState<Food[]>([]);
  const [cart, setCart] = useState<any[]>([]); // Cart state
  const [categoryData, setCategoryData] = React.useState<Category[]>([]);

  const fetchDataCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_POINT}/api/categories`
      );
      const data: CategoryResponse = await response.json();
      setCategoryData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Load initial cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_POINT}/api/foods`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const datas: ApiResponse = await response.json();
      setFoodsData(datas.data);
    } catch (err) {
      console.log(err);
    }
  };
  // Fetch food data
  useEffect(() => {
    fetchDataCategory();
    fetchProducts();
  }, []);

  const renderCategory = (categoryName: string, items: Food[]) => (
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
        {items?.map((dish) => (
          <Card
            key={dish._id}
            _id={dish._id}
            name={dish.name}
            img={dish.image}
            price={dish.price}
            ingredient={dish.ingredient}
            cart={cart} // Pass the current cart state
            setCart={setCart} // Pass the function to update the cart
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center pb-20">
      <div className="bg-green-500 w-full h-[93vh] flex items-center justify-center relative">
        <img className="absolute" src="Zurag.png" alt="Delicious Food 1" />
        <div className="absolute inset-0 bg-pattern opacity-20"></div>

        {/* Left Section: Content */}
        <div className="container m-auto flex justify-between">
          <div className="lg:w-1/2 p-8 z-10">
            <h1 className="text-white text-5xl font-bold pb-[30px]">
              Pinecone
              <br />
              Food Delivery
            </h1>
            <div className="w-[450px] border border-white"></div>
            <p className="text-white text-[25px] pt-[30px]">
              Horem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Right Section: Images */}
          <div className="lg:w-1/2 relative z-10 flex items-center justify-center">
            <img
              className="w-[250px] lg:w-[588px] absolute right-10 -bottom-10 object-cover rounded-full"
              src="Group.png" // Adjust the path if required
              alt="Delicious Food 2"
            />
          </div>
        </div>
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

      <div className="w-full flex flex-col justify-start items-center ">
        <div className="container flex flex-col gap-20">
          {categoryData.map((category) => {
            // Filter foods for the current category
            const filteredFoods = foodsData.filter(
              (food) => food.categoryId._id === category._id
            );

            console.log(filteredFoods);

            return (
              <div key={category._id}>
                <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>

                <div className="container flex gap-7">
                  {filteredFoods.map((dish) => (
                    <Card
                      key={dish._id}
                      _id={dish._id}
                      name={dish.name}
                      img={dish.image}
                      price={dish.price}
                      ingredient={dish.ingredient}
                      cart={cart} // Pass the current cart state
                      setCart={setCart} // Pass the function to update the cart
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
