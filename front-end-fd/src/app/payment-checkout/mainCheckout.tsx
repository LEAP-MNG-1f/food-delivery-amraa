import React, { useState, useEffect } from "react";

export default function MainCheckout() {
  const [orderDetails, setOrderDetails] = useState({
    customer: "674685f87f735716a2701b52",
    district: "",
    khoroo: "",
    apartment: "",
    detail: "",
    phone: "",
    paymentType: "",
    totalPrice: 0,
    process: "active", // Default status
  });

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const createOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !orderDetails.district ||
      !orderDetails.khoroo ||
      !orderDetails.apartment ||
      !orderDetails.phone
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    const orderData = {
      customer: orderDetails.customer,
      orderNumber: new Date().getTime(), // Generate a unique order number
      foodIds: cartItems.map((item) => JSON.stringify(item)), // Ensure foodIds are serialized as JSON strings
      totalPrice,
      process: orderDetails.process,
      district: orderDetails.district,
      khoroo: orderDetails.khoroo,
      apartment: orderDetails.apartment,
      detail: orderDetails.detail,
      phoneNumber: orderDetails.phone,
      paymentType: orderDetails.paymentType,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_POINT}/api/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Order successfully placed!");
        setCartItems([]); // Clear cart after successful order
        localStorage.removeItem("cart"); // Clear cart in localStorage
        setError(null); // Clear any previous errors
      } else {
        setError(data.message || "Error creating order");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while placing the order.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 flex gap-[300px]">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Хаягийн мэдээлэл оруулах
        </h2>
        <form onSubmit={createOrder} className="space-y-4">
          {/* District Input */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="district"
            >
              Дүүрэг сонгоно уу
            </label>
            <input
              type="text"
              value={orderDetails.district}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, district: e.target.value })
              }
              id="district"
              placeholder="Жишээ: Баянзүрх, Чингэлтэй, Сүхбаатар..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Khoroo Input */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="khoroo"
            >
              Хороо сонгоно уу
            </label>
            <input
              type="text"
              value={orderDetails.khoroo}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, khoroo: e.target.value })
              }
              id="khoroo"
              placeholder="Жишээ: 1-р хороо, 2-р хороо, 3-р хороо..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Apartment/Street Input */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="apartment"
            >
              Байр, гудамж сонгоно уу
            </label>
            <input
              type="text"
              value={orderDetails.apartment}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, apartment: e.target.value })
              }
              id="apartment"
              placeholder="Жишээ: Сөүлийн гудамж, Токиогийн гудамж..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Additional Information */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="detail"
            >
              Нэмэлт мэдээлэл
            </label>
            <textarea
              value={orderDetails.detail}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, detail: e.target.value })
              }
              id="detail"
              placeholder="Жишээ: Орц, давхар, орцны код..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Утасны дугаар<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={orderDetails.phone}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, phone: e.target.value })
              }
              id="phone"
              placeholder="Утасны дугаараа оруулна уу"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Payment Type */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="paymentType"
                value="cash"
                checked={orderDetails.paymentType === "cash"}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    paymentType: e.target.value,
                  })
                }
                className="form-radio text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2">Бэлнээр</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="paymentType"
                value="card"
                checked={orderDetails.paymentType === "card"}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    paymentType: e.target.value,
                  })
                }
                className="form-radio text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2">Картаар</span>
            </label>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              disabled={isLoading || cartItems.length === 0}
              className={`font-extrabold mr-17 rounded-lg w-[200px] p-2 ${
                isLoading || cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500"
              }`}
            >
              {isLoading ? "Захиалж байна..." : "Захиалах"}
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col">
        {cartItems.length === 0 ? (
          <p className="flex justify-center p-5">Сагс хоосон байна.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex mb-4 w-[500px] gap-6 border-b border-t p-4 relative"
            >
              <div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[250px] h-[140px] object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold">{item.name}</span>
                <span className="text-[12px]">{item.ingredient}</span>
                <span className="text-green-500">
                  ₮{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            </div>
          ))
        )}
        <div className="text-right">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Нийт төлөх дүн:</p>
              <p className="text-green-600 text-2xl font-bold">
                {totalPrice.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
