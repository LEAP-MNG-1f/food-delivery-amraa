"use client";

import React from "react";
import { HeaderPart } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Card } from "../_components/Card";

export default function page() {
  const dishes = [
    {
      id: 1,
      title: "American Recipes",
      amount: 9000,
      img: "https://res.cloudinary.com/df1bobxmm/image/upload/unsplash_fdlZBWIP0aM_dgblm9?_a=BAMCkGa40",
      ingredient: "tums luuvan",
    },
    {
      id: 2,
      title: "Mongolian Haluuhan Food",
      amount: 12000,
      img: "https://res.cloudinary.com/df1bobxmm/image/upload/20241119_100045_mq67u9?_a=BAMCkGa40",
      ingredient: "tums luuvan",
    },
    {
      id: 3,
      title: "Japanese Cuisine",
      amount: 15000,
      img: "https://res.cloudinary.com/df1bobxmm/image/upload/20241119_100554_kubkoh?_a=BAMCkGa40",
      ingredient: "tums luuvan",
    },
    {
      id: 4,
      title: "Italian Dishes",
      amount: 8500,
      img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png",
      ingredient: "tums luuvan",
    },
    {
      id: 5,
      title: "Mexican Tacos",
      amount: 9500,
      img: "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
      ingredient: "tums luuvan",
    },
    {
      id: 6,
      title: "French Cuisine",
      amount: 11000,
      img: "https://cooknshare.com/wp-content/uploads/2022/07/ratatouilleweb.jpg",
      ingredient: "tums luuvan",
    },
    {
      id: 7,
      title: "Chinese Dishes",
      amount: 13000,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/220921081550-05-chinese-foods-mapo-tofu.jpg?c=original",
      ingredient: "tums luuvan",
    },
    {
      id: 8,
      title: "Indian Cuisine",
      amount: 14000,
      img: "https://cdn.britannica.com/94/240094-050-D5CC461B/Indian-naan-flatbread.jpg",
      ingredient: "tums luuvan",
    },
    {
      id: 9,
      title: "Mediterranean Meals",
      amount: 10500,
      img: "https://minimalistbaker.com/wp-content/uploads/2016/07/The-Ultimate-Mediterranean-Bowl-SQUARE.jpg",
      ingredient: "tums luuvan",
    },
    {
      id: 10,
      title: "Thai Food",
      amount: 11500,
      img: "https://www.indulgebangkok.com/wp-content/uploads/2018/11/356fdc00e7ec5e447c1d322a91f8968a-1080x675.jpg",
      ingredient: "tums luuvan",
    },
    {
      id: 11,
      title: "Vietnamese Pho",
      amount: 12500,
      img: "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg",
      ingredient: "tums luuvan",
    },
    {
      id: 12,
      title: "Greek Dishes",
      amount: 13500,
      img: "https://www.greekality.com/wp-content/uploads/2022/01/moussaka.png",
      ingredient: "tums luuvan",
    },
    {
      id: 13,
      title: "Spanish Cuisine",
      amount: 12500,
      img: "https://www.discoverspain.today/wp-content/uploads/2024/01/Spanish-paella-spanish-foods.jpg",
      ingredient: "tums luuvan",
    },
    {
      id: 14,
      title: "Turkish Food",
      amount: 9500,
      img: "https://f.hubspotusercontent30.net/hubfs/20410430/Imported_Blog_Media/Turkish-Food.jpg",
      ingredient: "tums luuvan",
    },
    {
      id: 15,
      title: "Middle Eastern Meals",
      amount: 10000,
      img: "https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Shakshuka-with-Eggs-Chickpeas-and-Bread.png",
      ingredient: "tums luuvan",
    },
    {
      id: 16,
      title: "Caribbean Cuisine",
      amount: 11000,
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mang%C3%BA_with_Veggie_Meat.JPG",
      ingredient: "tums luuvan",
    },
  ];
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
          {dishes.map((dish) => (
            <Card
              key={dish.id}
              title={dish.title}
              img={dish.img}
              price={dish.amount}
              ingredient={dish.ingredient}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
