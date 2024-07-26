import "../Components.css";
import { MdOutlineErrorOutline } from "react-icons/md";

export const Error = () => {
  return (
    <>
      <div className=" botrder border-red-500  w-[100vw] h-[80vh] flex items-end  justify-center">
        <div className="error  border border-red-500">
          <MdOutlineErrorOutline className="text-[25px] " />
          Error Occured due to some Network Issue
        </div>
      </div>
    </>
  );
};
