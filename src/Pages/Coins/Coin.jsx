/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./Coin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Loader } from "../../Components/Loader/Loader";
import { Error } from "../../Components/Error/Error";
export const Coin = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const [err, seterr] = useState(false);

  const [coinValue, setcoinValue] = useState("inr");
  const [pages, setpages] = useState(1);

  const Btns = new Array(100).fill(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",

      "x-cg-demo-api-key": import.meta.env.MODE.VITE_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${coinValue}&page=${pages}`,
        options
      )
      .then((response) => {
        // console.log(response.data);
        setdata(response.data);
        setloader(false);
        seterr(false);
        // console.log(err);
      })
      .catch((error) => {
        seterr(true);
        setloader(false);
        console.log(error);
      });
    // console.log(err);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinValue, pages]);

  return (
    <>
      {err && <Error />}

      {loader ? (
        <Loader />
      ) : (
        <>
          {!err && (
            <div className="  flex flex-wrap sm:p-4  p-1  gap-[10px] ">
              <input
                type="radio"
                name="price"
                className="bg-red-200"
                checked={coinValue === "inr" && "on"}
                value={"inr"}
                onChange={() => {
                  setcoinValue("inr");
                  // setChecked("Off");
                }}
              />
              <label> Inr</label>
              <input
                type="radio"
                name="price"
                checked={coinValue === "usd" && "on"}
                id="usd"
                onChange={(e) => {
                  setcoinValue("usd");
                }}
              />
              <label>Usd</label>
              <input
                type="radio"
                name="price"
                checked={coinValue === "eur" && "on"}
                id="ero"
                onChange={() => {
                  setcoinValue("eur");
                }}
              />
              <label>Euro</label>
            </div>
          )}

          <div className="flex flex-wrap sm:p-4  p-1 justify-center ">
            {data.map((Coin) => (
              <Link to={`/coins/${Coin.id}`} key={Coin.id}>
                <div className="Card " onClick={() => console.log(Coin.id)}>
                  <div className=" flex flex-col items-center justify-start ">
                    <img
                      src={Coin.image}
                      alt=""
                      className=" w-[100px] h-[100px] object-fill "
                    />
                    <div className=" text-center">{Coin.name}</div>
                    <p className="text-center">{Coin.symbol}</p>
                    <p>
                      {coinValue === "inr"
                        ? "₹"
                        : coinValue === "usd"
                        ? "$"
                        : coinValue === "eur"
                        ? "€"
                        : "NAN"}

                      {Coin.current_price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {!err && (
            <div className="   flex justify-center scroll-smooth  ">
              <div className="   scrollBtn ">
                {Btns.map((index, i) => (
                  <button
                    className="buttons "
                    key={i}
                    onClick={() => {
                      setpages(index + i);
                      console.log(index + i);
                      setloader(true);
                    }}
                  >
                    {index + i}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
