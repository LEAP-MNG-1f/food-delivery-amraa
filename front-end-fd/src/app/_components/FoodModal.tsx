import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  food: {
    _id?: string;
    name?: string;
    description?: string;
    price?: number;
    img?: string;
  };
  cart: any[]; // Pass the current cart state
  setCart: React.Dispatch<React.SetStateAction<any[]>>; // Function to update the cart state
}

const FoodModal: React.FC<FoodModalProps> = ({
  isOpen,
  onClose,
  food,
  cart,
  setCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      ...food,
      quantity,
    };

    const existingItemIndex = cart.findIndex((item) => item._id === food._id);

    let updatedCart;

    if (existingItemIndex !== -1) {
      updatedCart = cart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cart, cartItem];
    }

    setCart(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 

    onClose(); 
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      aria-labelledby="food-dialog-title"
      sx={{
        borderRadius: "16px",
      }}
    >
      {/* Title section with close button */}

      {/* Main content */}
      <DialogContent
        sx={{
          borderRadius: "16px",
        }}
      >
        <div className="flex flex-col gap-7 md:flex-row">
          {/* Image section */}
          <div className="md:w-[60%]">
            <img
              src={food.img}
              alt={food.name || "Food"}
              className="w-[500px] h-[500px] object-cover"
            />
          </div>

          {/* Details section */}
          <div className="md:w-[40%] flex flex-col justify-between">
            {/* Food Info */}
            <div>
              <DialogTitle
                id="food-dialog-title"
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "0px",
                }}
              >
                <IconButton edge="end" color="inherit" onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
              <p className="text-green-600 text-xl mb-4">{food.price}₮</p>
              <h3 className="font-bold mb-2">Орц</h3>
              <p className="text-gray-600">{food.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <h3 className="font-bold mb-2">Тоо</h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </Button>
                <span className="text-xl">{quantity}</span>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="contained"
              color="success"
              onClick={handleAddToCart}
              sx={{ mt: 4, backgroundColor: "#18BA51" }}
            >
              Сагслах
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FoodModal;
