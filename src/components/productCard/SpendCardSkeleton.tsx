const SpendCardSkeleton = () => {
  return (
    <div
      className="bg-white relative hover:border
       hover:border-[#d6d6d7] rounded-[15px] p-4 "
    >
      {/* header */}
      <div className="flex justify-between">
        <div className=" bg-gray-200 h-5 rounded-md animate-pulse w-24 "></div>
        <div className="bg-gray-200 animate-pulse h-4 rounded-full  w-12 "></div>
      </div>

      <div className="bg-gray-200 h-4 mt-2 rounded-md animate-pulse max-w-32"></div>

      <div className="my-5   flex   flex-col gap-1">
        <div className="flex justify-between w-full ">
          <div className="flex w-full flex-col">
            <div className="h-2 rounded animate-pulse w-10 bg-gray-200"> </div>
            <div className="bg-gray-200 h-5 mt-2 rounded-md animate-pulse max-w-18"></div>
          </div>
          <div className="flex text-end flex-col items-end w-full">
            <div className="h-2 rounded animate-pulse w-10 bg-gray-200"> </div>
            <div className="bg-gray-200 h-5 mt-2 rounded-md animate-pulse w-18"></div>
          </div>
        </div>

        {/* ProgressBar  */}
        <div className="w-full bg-gray-200 rounded-full h-1 ">
          <div
            className="bg-gray-200 animate-pulse h-1 rounded-full"
            style={{
              width: `100%`,
            }}
          ></div>
        </div>
      </div>

      {/* footer - start*/}
      <div className="mt-4 flex justify-between items-center">
        {/* Sattus */}
        <div className="flex items-center ">
          <div
            className={`w-2 h-2  bg-gray-200 rounded-full inline-block mr-1  `}
          ></div>
          <div
            className={`bg-gray-200 h-4 rounded-md  w-16 animate-pulse `}
          ></div>
        </div>

        {/* Expiry */}

        <div className="bg-gray-200 h-4 rounded-md  w-16 animate-pulse"> </div>
      </div>
      {/* footer - start*/}
    </div>
  );
};

export default SpendCardSkeleton;
