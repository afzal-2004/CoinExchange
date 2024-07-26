import "./Home.css";
import ShareMaket from "/ShareMarket.webp";
import aboutimage from "/MarketAbout.webp";
import visionImage from "/VisionImage.jpg";
export const Home = () => {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src={ShareMaket}
            alt=""
            className=" min-w-[100vw] min-h-[70vh]  object-fill"
          />
          <p className=" absolute top-[50%] text-white text-[20px] p-4 sm:text-[35px] sm:right-0 md:w-[50%] text-center">
            Visualize and Analyze Share Market Data with Quantam Coin{" "}
          </p>
        </div>
        <div
          className=" mt-[5%] sm:m-[2%]  sm:flex justify-between items-center "
          id="about"
        >
          <div className=" aboutDesign ">
            <h1 className="  sm:text-[40px]   text-[30px] text-center font-bold">
              {" "}
              About
            </h1>{" "}
            <p className="  text-[20px] mt-[10px]">
              At Quantam Coin, we are dedicated to transforming the way you
              interact with the stock market. Our mission is to provide
              investors, both new and experienced, with powerful tools to
              visualize and analyze market data effectively.
            </p>
          </div>
          <div>
            <img src={aboutimage} alt="" />
          </div>
        </div>
        <div
          className=" mt-[5%] sm:m-[2%]  sm:flex justify-between items-center "
          id="#vision"
        >
          <div>
            <img
              src={visionImage}
              alt=""
              className="  rounded-full  w-[400px] h-[400px] sm:w-[500px]  sm:h-[500px] "
            />
          </div>
          <div className=" ourVision">
            <h1 className="  sm:text-[40px] text-[30px] text-center font-bold">
              Our Vision
            </h1>{" "}
            <p className="  text-[20px] mt-[10px]">
              We believe that informed decisions are the key to successful
              investments. By offering a platform that simplifies complex data
              and presents it in an intuitive manner, we aim to empower our
              users with insights that were previously difficult to obtain.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
