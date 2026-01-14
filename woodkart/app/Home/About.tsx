'use client';

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smile, Truck, ShieldCheck, Factory } from "lucide-react";

const Home: React.FC = () => {
 return (
    <div className="flex flex-col gap-2 pb-12">
        <h2 className="font-sans text-lg font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, molestias adipisci. Delectus atque </h2>
        <p className="font-sans text-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam inventore a natus aliquid maiores optio corrupti fuga, fugit magni molestiae aspernatur perferendis, explicabo esse velit voluptatum dolores eligendi in?
            Lorem ipsum dolor sit amet <span className="text-blue-500">consectetur</span>, adipisicing elit. Minima provident similique fugiat fugit voluptas ea optio vitae error, cum ipsum, laboriosam quis quas cumque velit quam veniam earum! Saepe, possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente tempora, quae suscipit alias, veritatis optio necessitatibus quis corrupti eligendi commodi blanditiis mollitia? Officiis totam magnam neque excepturi aliquid repudiandae.
        </p>

        <h2 className="font-sans text-lg font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, molestias adipisci. Delectus atque </h2>
        <p className="font-sans text-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam inventore a natus aliquid maiores optio corrupti fuga, fugit magni molestiae aspernatur perferendis, explicabo esse velit voluptatum dolores eligendi in?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima provident similique fugiat fugit voluptas ea optio vitae error, cum ipsum, laboriosam quis quas cumque velit quam veniam earum! Saepe, possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente tempora, quae suscipit alias, veritatis optio necessitatibus quis corrupti eligendi commodi blanditiis mollitia? Officiis totam magnam neque excepturi aliquid repudiandae.
        </p>

        <h2 className="font-sans text-lg font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, molestias adipisci. Delectus atque </h2>
        <p className="font-sans text-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam inventore a natus aliquid maiores optio corrupti fuga, fugit magni molestiae aspernatur perferendis, explicabo esse velit voluptatum dolores eligendi in?
            Lorem ipsum dolor <span className="text-blue-500">consectetur</span> sit amet consectetur, adipisicing elit. Minima provident similique fugiat fugit voluptas ea optio vitae error, cum ipsum, laboriosam quis quas cumque velit quam veniam earum! Saepe, possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente tempora, quae suscipit alias, veritatis optio necessitatibus quis corrupti eligendi commodi blanditiis mollitia? Officiis totam magnam neque excepturi aliquid repudiandae.
        </p>

        <h2 className="font-sans text-lg font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, molestias adipisci. Delectus atque </h2>
        <p className="font-sans text-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus <span className="text-blue-500">consectetur</span> quisquam inventore a natus aliquid maiores optio corrupti fuga, fugit magni molestiae aspernatur perferendis, explicabo esse velit voluptatum dolores eligendi in?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima provident similique fugiat fugit voluptas ea optio vitae error, cum ipsum, laboriosam quis quas cumque velit quam veniam earum! Saepe, possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente tempora, quae suscipit alias, veritatis optio necessitatibus quis corrupti eligendi commodi blanditiis mollitia? Officiis totam magnam neque excepturi aliquid repudiandae.
        </p>

    </div>


    );
  };

export default Home;