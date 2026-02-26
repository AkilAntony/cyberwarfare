import Tag from "@/components/ui/Tag";
import type { CardProps } from "@/types/cardListing";
import {
  captializeFirstLetter,
  getCardTyopeColor,
  getStatusColor,
  statusIconColor,
} from "@/utils/common";

export const Card = ({ item }: CardProps) => {
  return (
    <div
      className="bg-white relative hover:border hover:border-[#d6d6d7] rounded-[15px] p-4 "
      style={{
        fontFamily: "sans-serif",
      }}
    >
      {/* header */}
      <div className="flex justify-between  ">
        <div>
          <h2 className="text-md font-semibold ">{item.name}</h2>
          <p className="text-gray-600 text-[14px]">{item.budget_name}</p>
        </div>

        {/* tag */}
        <Tag
          text={captializeFirstLetter(item.card_type)}
          className={getCardTyopeColor(item.card_type)}
        />
      </div>

      <div className="my-5   flex   flex-col gap-1">
        <div className="flex justify-between w-full ">
          <div className="flex  flex-col md:text-[16px]">
            <p className="text-gray-600 text-[10px]">Spent</p>
            <p className="text-md font-semibold">{`${item.spent.value} ${item.spent.currency}`}</p>
          </div>
          <div className="flex text-end flex-col ">
            <p className="text-gray-600 text-[10px]">Available to spend</p>
            <p className="text-md font-semibold">{`${item.available_to_spend.value} ${item.available_to_spend.currency}`}</p>
          </div>
        </div>

        {/* ProgressBar  */}
        <div className="w-full bg-gray-200 rounded-full h-1 ">
          <div
            className="bg-blue-600 h-1 rounded-full"
            style={{
              width: `${(item.spent.value/(item.spent.value + item.available_to_spend.value)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* footer - start*/}
      <div className="mt-4 flex justify-between items-center">
        {/* Sattus */}
        <div>
          <span
            className={`w-2 h-2 rounded-full inline-block mr-1 ${statusIconColor(item.status)}`}
          ></span>
          <span className={`${getStatusColor(item.status)} text-[12px]`}>
            {captializeFirstLetter(item.status)}
          </span>
        </div>

        {/* Expiry */}

        <p className="text-gray-600 text-[12px]">
          {item.expiry ? `Expires: ${item.expiry}` : `Limit : ${item.limit}`}
        </p>
      </div>
      {/* footer - start*/}
    </div>
  );
};
