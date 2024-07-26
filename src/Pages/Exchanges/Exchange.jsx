/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

import "./Exchange.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Loader } from "../../Components/Loader/Loader";
import { Error } from "../../Components/Error/Error";
export const Exchange = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const [err, seterr] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",

      "x-cg-demo-api-key": import.meta.env.MODE.VITE_API_KEY,
    },
  };
  // console.log(process.env.API_KEY);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges", options)
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
        seterr(false);
        setloader(false);
      })
      .catch((err) => {
        seterr(true);
        setloader(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      {err && <Error />}

      {loader ? (
        <Loader />
      ) : (
        <div className=" flex flex-wrap sm:p-4  p-1 justify-center ">
          {data.map((Coin) => (
            <div key={Coin.id} className="card ">
              <a
                target={"blank"}
                href={Coin.url}
                className="flex flex-col justify-center items-center gap-2 "
              >
                <img src={Coin.image} alt="" />
                <p>{Coin.trust_score_rank}</p>
                <div className=" text-center">{Coin.name}</div>
                {/* <p>{Coin.year_established}</p> */}
                <p>{Coin.country}</p>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
