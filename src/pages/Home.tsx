import { Card } from "@/components/Card";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import SearchInput from "@/components/common/SearchInput";
import { useDebounce } from "@/hooks/useDebounce";
import { API_RESPONSE } from "@/utils/data";
import React, {
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const LoadingUI = React.lazy(
  () => import("@/components/productCard/SpendCardSkeleton"),
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const [searchInput, setSearchInput] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);

  const debouncedSearchInput = useDebounce(searchInput, 300);

  // handleSearch
  const filteredData = useMemo(() => {
    if (!debouncedSearchInput) return data;
    return data.filter((item: any) =>
      item.name
        .split(" ")
        .join("")
        .toLowerCase()
        .startsWith(debouncedSearchInput.split(" ").join("").toLowerCase()),
    );
  }, [debouncedSearchInput, data]);

 

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
        {/* user Actions */}

        <div>
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
