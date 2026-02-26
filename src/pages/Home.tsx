import { Card } from "@/components/Card";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import SearchInput from "@/components/common/SearchInput";
import { useDebounce } from "@/hooks/useDebounce";
import { API_RESPONSE } from "@/utils/data";
import React, { useEffect, useMemo, useRef, useState } from "react";

const LoadingUI = React.lazy(
  () => import("@/components/productCard/SpendCardSkeleton"),
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]); //containes all the data from the API response
  const [filteredData, setFilteredData] = useState<any>([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeTab, setActiveTab] = useState("Yours");

  const bottomRef = useRef<HTMLDivElement>(null);

  const debouncedSearchInput = useDebounce(searchInput, 300);

  const tabOptions = ["Yours", "All", "Blocked"];
  const userId = 1; // Assuming current user have the user ID available

  // handleSearch
  useEffect(() => {
    if (debouncedSearchInput) {
      setFilteredData(
        filteredData.filter((item: any) =>
          item.name
            .split(" ")
            .join("")
            .toLowerCase()
            .startsWith(debouncedSearchInput.split(" ").join("").toLowerCase()),
        ),
      );
    } else {
      handleTabClick(activeTab);
    }
  }, [debouncedSearchInput, data]);



  // handle tab click
  const handleTabClick = (option: string) => {
    switch (option) {
      case "Yours":
        const filtered = data.filter((item: any) => item.owner_id === userId);
        setFilteredData(filtered);
        break;
      case "Blocked":
        const filteredBlocked = data.filter(
          (item: any) => item.status === "blocked",
        );
        setFilteredData(filteredBlocked);
        break;
      case "All":
        setFilteredData(data);
        break;
        
      default:
        setFilteredData(data);
    }

    if (activeTab !== option) {
      setActiveTab(option);
    }
  };

  useEffect(() => {
    new Promise((resole) => {
      setIsLoading(true);
      setTimeout(() => {
        resole(API_RESPONSE.data);
        setIsLoading(false);
      }, 2000);
    }).then((data) => {
      console.log("data inside then", data);
      setData(data);
    });
  }, []);

  return (
    <LayoutWrapper>
      <div className="section-wrapper">
        {/* tabs */}
        <div className="flex items-center gap-3 ">
          {tabOptions.map((option) => (
            <button
              key={option}
              className={`px-4 py-1 cursor-pointer rounded-full ${option === activeTab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-500  text-white "
                }`}
              onClick={() => handleTabClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* user Actions */}
        <div className="mt-6">
          {/* Search */}
          <SearchInput
            input={searchInput}
            setInput={setSearchInput}
            placeholder="Search by Name"
            disable={isLoading}
          />

          {/* filters */}
          <div></div>
        </div>

        {/* Grid view */}
        <div
          className=" mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 2xl:grid-cols-3 gap-4 "
        >
          {isLoading
            ? Array.from({ length: 9 }).map((ele) => <LoadingUI />)
            : filteredData.map((item: any) => (
              <Card key={item.name} item={item} />
            ))}
        </div>

        <div ref={bottomRef}></div>
      </div>
    </LayoutWrapper>
  );
};

export default Home;
