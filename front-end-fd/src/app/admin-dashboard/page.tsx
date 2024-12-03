"use client";

import React, { useState, useEffect } from "react";
import { HeaderPart } from "../_components/Header";
import { Footer } from "../_components/Footer";

type CustomerType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type FoodItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  categoryId: {
    _id: string;
    name: string;
    __v: number;
  };
  ingeredient: string;
  __v: number;
  quantity: number;
};

type orderType = {
  _id: string;
  customer: CustomerType;
  orderNumber: string;
  foodIds: FoodItem[];
  totalPrice: string;
  process: string;
  district: string;
  khoroo: string;
  apartment: string;
  detail: string;
  phoneNumber: string;
  paymentType: string;
  createdDate: string;
};

type ApiResponse = {
  data: orderType[];
};

export default function page() {
  const [order, setOrder] = useState<orderType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACK_END_POINT}/api/orders`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const datas: ApiResponse = await response.json();
        setOrder(datas.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const updateOrderProcess = async (orderId: string, newProcess: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_POINT}/api/patch-order-process/${orderId}`,
        {
          method: "PATCH", // Use PATCH for partial updates
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ process: newProcess }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Update the state with the updated order
      setOrder((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, process: newProcess } : order
        )
      );

      alert("Order process updated successfully!");
    } catch (err) {
      console.error("Failed to update process:", err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeaderPart />
      <div className="bg-[#F7F7F8] w-full flex justify-center">
        <div className="container flex min-h-[93vh] justify-center pt-40">
          <div className="overflow-x-auto">
            <table className="table min-w-[50vw] ">
              {/* head */}
              <thead>
                <tr>
                  <th>Order name</th>
                  <th>Buyer info</th>
                  <th>Payment</th>
                  <th>Address</th>
                  <th>Delivery state</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-20 w-20">
                            <img
                              src={item.foodIds[0].image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-base">
                            #{item.orderNumber}
                          </div>
                          <div className="text-base opacity-50">
                            {item.foodIds[0].name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-base font-extrabold">
                        {item.customer.phoneNumber}
                      </div>

                      <br />
                      <span className="badge badge-ghost badge-base">
                        {item.customer.name}
                      </span>
                    </td>
                    <td>
                      <div className="text-base font-extrabold">
                        ₮{item.totalPrice}
                      </div>
                      <br />
                      <span className="badge badge-ghost badge-base">
                        {item.createdDate}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-base">
                        {item.district}, {item.khoroo},{item.apartment}
                      </span>
                    </td>
                    <th>
                      <select
                        value={item.process}
                        onChange={(e) =>
                          updateOrderProcess(item._id, e.target.value)
                        }
                        className="border border-gray-300 rounded-md p-1"
                      >
                        <option value="active">active</option>
                        <option value="progress">progress</option>
                        <option value="waiting">waiting</option>
                        <option value="delivered">delivered</option>
                      </select>
                    </th>
                  </tr>
                ))}
              </tbody>

              {/* <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
