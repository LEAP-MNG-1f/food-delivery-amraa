import * as React from "react";
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
  image: string;
};

const navigationItems = [
  { label: "НҮҮР", path: "/" },
  { label: "ХООЛНЫ ЦЭС", path: "/menu" },
  { label: "ХҮРГЭЛТИЙН БҮС", path: "/delivery-zones" },
];

export const HeaderPart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);

  const toggleCart = React.useCallback(
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

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(cart);

  const cartContent = () => (
    <Box role="presentation" className="w-72">
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
        <ListItem>
          <ListItemText
            primary="Таны сагс хоосон байна"
            className="text-gray-500 text-center"
          />
          {cart.map((item: Food) => (
            <div key={item.title}>{item.title}</div>
          ))}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* Spacer div to prevent content from hiding behind fixed header */}
      <div className="h-20" /> {/* Adjust height to match header height */}
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
                <ShoppingCartIcon className="text-black group-hover:text-gray-600 transition-colors duration-300" />
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
