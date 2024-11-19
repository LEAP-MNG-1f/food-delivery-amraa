import React from "react";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import BookLogo from "../../../public/svg/Booklogo";
import { Card } from "./Card";
import { Starlogo } from "../../../public/svg/Starlogo";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type Dish = {
  id: number;
  title: string;
  amount: number;
  img: string;
  ingredient?: string;
};

export default function Hero() {
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

  const renderCategory = (categoryName: string, items: Dish[]) => (
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
        {items.map((dish) => (
          <Card
            key={dish.id}
            title={dish.title}
            img={dish.img}
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
        {renderCategory("Хямдралтай", dishes.slice(0, 4))}
        {renderCategory("Үндсэн хоол", dishes.slice(4, 8))}
        {renderCategory("Салад ба зууш", dishes.slice(8, 12))}
        {renderCategory("Амттан", dishes.slice(12, 16))}
      </div>
    </div>
  );
}
