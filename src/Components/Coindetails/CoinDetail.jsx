/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import "../Components.css";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";

export const CoinDetail = () => {
  const params = useParams();
  const [data, setdata] = useState([]);
  const [currency, setcurrency] = useState("inr");
  const [loading, setloading] = useState(true);
  const [err, seterr] = useState(false);
  const Update = new Date(data.last_updated);
  const Current_Date = Update.toLocaleDateString();
  const currentUpdate = Update.toLocaleTimeString();
  let currencySymbol =
    currency === "inr"
      ? "₹"
      : currency === "usd"
      ? "$"
      : currency === "eur"
      ? "€"
      : "";

  const options = {
    method: "GET",

    headers: {
      accept: "application/json",

      "x-cg-demo-api-key": import.meta.env.MODE.VITE_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(`https://api.coingecko.com/api/v3/coins/${params.id}`, options)
      .then(function (response) {
        console.log(response.data);
        setdata(response.data);
        setloading(false);
      })
      .catch(function (error) {
        console.error(error);
        seterr(true);
        setloading(false);
      });
  }, [currency]);

  return (
    <>
      {err ? (
        <Error />
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="   flex   gap-3 ml-3">
                <input
                  type="radio"
                  name="price"
                  checked={currency === "inr" && "on"}
                  onChange={() => {
                    setcurrency("inr");
                  }}
                />

                <label htmlFor="inr">inr</label>
                <input
                  type="radio"
                  name="price"
                  checked={currency === "usd" && "on"}
                  onChange={() => {
                    setcurrency("usd");
                  }}
                />
                <label htmlFor="inr">usd</label>
                <input
                  type="radio"
                  name="price"
                  checked={currency === "eur" && "on"}
                  onChange={() => {
                    setcurrency("eur");
                  }}
                />
                <label htmlFor="inr">Euro</label>
              </div>

              <p className=" text-center text-slate-400  sm:mt-[2vh] mt-[5vh]">
                Last Update {Current_Date} {currentUpdate}
              </p>

              <div className=" text-center w-full flex justify-center">
                <p className=" sm:text-[35px] text-[25px]  text-red-500    p-3 text-center sm:text-start">
                  {" "}
                  Market rank : #{data.market_cap_rank}
                </p>
              </div>
              <div className="   sm:flex justify-between  p-3 items-center">
                <div className="sm:max-w-[300px] w-full flex flex-col items-center gap-4  mt-[25px]  ">
                  <img
                    src={data.image?.large}
                    alt=""
                    className="max-w-[300px] max-h-[300px] "
                  />
                  <p className="  text-[24px]">{data.name}</p>
                  <p className="  text-[24px]">
                    {currencySymbol}
                    {data.market_data?.current_price[currency]}
                  </p>
                  <p className=" flex gap-3 items-center text-[25px]">
                    {data.market_data?.price_change_percentage_24h > 0 ? (
                      <GoTriangleUp className="text-[35px]  text-green-500" />
                    ) : (
                      <GoTriangleDown className="text-[35px]  text-red-500" />
                    )}
                    {data.market_data?.price_change_percentage_24h} %
                  </p>
                </div>

                <section className="detailsDataSection ">
                  <div className=" w-[100%]  flex flex-col items-center  justify-center gap-3 p-1 ">
                    <input
                      type="range"
                      maxLength={data.market_data?.high_24h[currency]}
                      minLength={data.market_data?.low_24h[currency]}
                      className=" w-full"
                    />
                    <div className=" flex justify-between w-full">
                      <p className=" text-red-500 gap-3">
                        <label className=" sm:text-[15px] text-[12px]">
                          Min
                        </label>
                        {currencySymbol}
                        {data.market_data?.low_24h[currency]}
                      </p>
                      <p className=" text-green-600">
                        <label className=" sm:text-[15px] text-[10px]">
                          {" "}
                          max
                        </label>
                        {currencySymbol}
                        {data.market_data?.high_24h[currency]}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className=" flex justify-between">
                      <label> Maximum Supply</label>
                      <p>{data.market_data?.max_supply}</p>
                    </div>

                    <div className="detailCoindata">
                      <label>Ciculate Supply</label>
                      <p>{data.market_data?.circulating_supply}</p>
                    </div>

                    <div className=" detailCoindata">
                      <label>Market cap</label>
                      <p>
                        {currencySymbol}{" "}
                        {data.market_data?.market_cap[currency]}
                      </p>
                    </div>
                    <div className=" detailCoindata text-green-500">
                      <label>All time high</label>
                      <p>
                        {currencySymbol} {data.market_data?.ath[currency]}
                      </p>
                    </div>
                    <div className=" detailCoindata text-red-400">
                      <label>All time Low</label>
                      <p>
                        {currencySymbol} {data.market_data?.atl[currency]}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
