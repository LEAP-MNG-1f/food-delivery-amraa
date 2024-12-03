import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import BlackPineLogo from "../../../public/svg/BlackPineLogo";

type Food = {
  _id: string;
  title: string;
  price: number;
  img: string;
  description: string;
  quantity: number;
};

const navigationItems = [
  { label: "НҮҮР", path: "/" },
  { label: "ХООЛНЫ ЦЭС", path: "/menu" },
  { label: "ХҮРГЭЛТИЙН БҮС", path: "/delivery-zones" },
];

export const HeaderPart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<Food[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false); // Track client-side rendering

  // Load cart from localStorage on component mount
  useEffect(() => {
    setIsClient(true); // Ensure this only runs on the client-side
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        setCart([]);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const toggleCart = useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsCartOpen(open);
    },
    []
  );

  // Ensure useRouter is only used on the client

  const removeItemFromCart = (itemToRemove: Food) => {
    setCart(cart.filter((item) => item._id !== itemToRemove._id));
  };

  const updateItemQuantity = (itemToUpdate: Food, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItemFromCart(itemToUpdate);
    } else {
      setCart(
        cart.map((item) =>
          item._id === itemToUpdate._id
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartContent = () => (
    <Box role="presentation" className="w-[570px]">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Таны сагс</h2>
        <IconButton
          onClick={toggleCart(false)}
          className="rounded-full hover:bg-gray-100 transition-all duration-300"
          aria-label="close cart"
        >
          <CloseIcon className="text-gray-600" />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem className="flex flex-col">
          {cart.length === 0 && (
            <ListItemText
              primary="Таны сагс хоосон байна"
              className="text-gray-500 text-center"
            />
          )}
          {cart.map((item: Food, index) => (
            <div className="p-4 flex gap-4 w-full" key={index}>
              <div>
                <img
                  className="w-[245px] h-[150px] object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="w-[245px] flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold text-lg">{item.title}</div>
                    <div className="text-[#18BA51] font-semibold text-lg">
                      {item.price}₮
                    </div>
                  </div>
                  <button
                    onClick={() => removeItemFromCart(item)}
                    className="text-red-500 hover:text-red-700"
                  >
                    X
                  </button>
                </div>
                <div className="text-[#767676] font-normal text-base">
                  {item.description}
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateItemQuantity(item, item.quantity - 1)}
                    className="text-white w-[45px] h-[40px] bg-[#18BA51] rounded-xl font-black text-2xl"
                  >
                    -
                  </button>
                  <div className="px-7 py-2">{item.quantity}</div>
                  <button
                    onClick={() => updateItemQuantity(item, item.quantity + 1)}
                    className="text-white w-[45px] h-[40px] bg-[#18BA51] rounded-xl font-black text-2xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          {cart.length > 0 && (
            <div className="fixed bottom-0 right-0 flex w-[570px] justify-between p-8">
              <div className="flex flex-col gap-1">
                <div>Нийт төлөх дүн</div>
                <div className="font-bold text-[#18BA51]">
                  {calculateTotalPrice()}₮
                </div>
              </div>
              <Link href="/payment-checkout">
                <button className="w-56 h-8 py-2 px-4 flex justify-center items-center bg-[#18BA51] text-white text-base font-normal rounded-md">
                  Захиалах
                </button>
              </Link>
            </div>
          )}
        </ListItem>
      </List>
    </Box>
  );

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <>
      <div className="h-20" />
      <header className="fixed top-0 left-0 right-0 border-b border-gray-100 bg-white z-50">
        <div className="container mx-auto py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 w-1/2">
              <div className="transition-transform duration-300 hover:scale-105">
                <Link href="/">
                  <BlackPineLogo />
                </Link>
              </div>

              <nav className="flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.path}
                    className="relative font-medium text-black hover:text-gray-700 transition-colors duration-300 group"
                    aria-label={item.label}
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-6 w-1/2 justify-end">
              <div className="relative w-[300px]">
                <input
                  type="search"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 outline-none"
                  placeholder="Хайх..."
                  aria-label="Search"
                />
              </div>

              <button
                onClick={toggleCart(true)}
                className="flex items-center space-x-2 group"
                aria-expanded={isCartOpen}
                aria-label="Open cart"
              >
                <div className="relative">
                  <ShoppingCartIcon className="text-black group-hover:text-gray-600 transition-colors duration-300" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </div>
                <span className="font-medium text-black group-hover:text-gray-600 transition-colors duration-300">
                  Сагс
                </span>
              </button>

              <Link
                href="/login"
                className="flex items-center space-x-2 group"
                aria-label="Profile"
              >
                <PersonIcon className="text-black group-hover:text-gray-600 transition-colors duration-300" />
                <span className="font-medium text-black group-hover:text-gray-600 transition-colors duration-300">
                  Нэвтрэх
                </span>
              </Link>
            </div>
          </div>
        </div>

        <Drawer
          anchor="right"
          open={isCartOpen}
          onClose={toggleCart(false)}
          className="transition-transform duration-300"
        >
          {cartContent()}
        </Drawer>
      </header>
    </>
  );
};
