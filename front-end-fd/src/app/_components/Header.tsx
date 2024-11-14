import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Header() {
  return (
    <div className="w-[1258px] h-14 flex items-center justify-between ">
      <Stack spacing={2} direction="row">
        <button>
          <Logo />
        </button>
        <Button variant="text" style={{ color: "black" }}>
          НҮҮР
        </Button>
        <Button variant="text" style={{ color: "black" }}>
          ХООЛНЫ ЦЭС
        </Button>
        <Button variant="text" style={{ color: "black" }}>
          ХҮРГЭЛТИЙН БҮС
        </Button>
      </Stack>
      <div className="flex items-center">
        <label className="input input-bordered flex items-center gap-2">
          <SearchOutlinedIcon />
          <input
            type="text"
            className="grow h-10 w-[260px]"
            placeholder="Хайх..."
          />
        </label>

        <div className="flex items-center py-2 px-4 gap-2">
          <ShoppingBasketOutlinedIcon />
          <div className="font-bold text-sm">Сагс</div>
        </div>
        <div className="flex items-center py-2 px-4 gap-2">
          <ShoppingBasketOutlinedIcon />
          <div className="font-bold text-sm">Нэвтрэх</div>
        </div>
        <div>HUMUUSEE HUMUUSE AMIDDAAL BIY BIYNEE HAIRLAY</div>
      </div>
    </div>
  );
}
