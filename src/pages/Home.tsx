import { Card } from "@/components/Card";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import SearchInput from "@/components/common/SearchInput";
import SpendCardSkeleton from "@/components/productCard/SpendCardSkeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { API_RESPONSE } from "@/utils/data";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const LoadingUI = React.lazy(
  () => import("@/components/productCard/SpendCardSkeleton"),
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [hasMore, setHasMore] = useState(true);
  const [filterValue, setFilterValue] = useState("");
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const debouncedSearchInput = useDebounce(searchInput, 200);
  const tabOptions = ["All", "Yours", "Blocked"];
  const userId = 1; // Assuming current user have the user ID available

  const loadMoreData = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      setApiResponse((prev: any[]) => {
        const start = prev.length;
        const end = start + 10;

        const nextItems = API_RESPONSE.data.slice(start, end);

        if (end >= API_RESPONSE.data.length) {
          setHasMore(false);
        }

        return [...prev, ...nextItems];
      });

      setIsLoading(false);
    }, 1000);
  }, [isLoading, hasMore]);

  // initial load
  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreData();
        }
      },
      { threshold: 1 },
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loadMoreData]);

  // handle all the filtering logic here
  const filteredData = useMemo(() => {
    return apiResponse.filter((item: any) => {
      // Tab filtering
      if (activeTab === "Yours" && item.owner_id !== userId) return false;
      if (activeTab === "Blocked" && item.status !== "blocked") return false;

      // Card type filtering
      if (filterValue && item.card_type !== filterValue) return false;

      // search input filtering
      if (debouncedSearchInput) {
        const name = item.name.split(" ").join("").toLowerCase();
        const search = debouncedSearchInput.split(" ").join("").toLowerCase();
        if (!name.startsWith(search)) {
          return false;
        }
      }

      return true;
    });
  }, [apiResponse, activeTab, filterValue, userId, debouncedSearchInput]);

  const handleTabClick = (option: string) => {
    setSearchInput('')
    setActiveTab(option);
  };

  const handleFilterChange = (type: string) => {
    if (type === "all") {
      setFilterValue("");
      return;
    }
    setFilterValue(type);
  };

  return (
    <LayoutWrapper>
      <div className="section-wrapper min-h-screen   mx-auto">
        {/* tabs */}
        <div className="flex items-center gap-3 ">
          {tabOptions.map((option) => (
            <button
              key={option}
              className={`px-4 py-1 cursor-pointer rounded-full ${
                option === activeTab
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
        <div
          className="mt-6 flex  
        w-full gap-10 items-center  justify-between"
        >
          {/* Search */}
          <div className="md:w-[60%] w-[65%]">
            <SearchInput
              input={searchInput}
              setInput={setSearchInput}
              placeholder="Search by Name"
              disable={isLoading}
              styles="text-[14px] bg-white 
              border-[#d6d6d7] active:border-blue-500 focus:border-blue-500"
            />
          </div>

          {/* filters */}
          <div className="md:max-w-[200px]">
            <select
              name="cardType"
              value={filterValue}
              id="cardType"
              className="w-full md:p-2 p-1 px-5 text-[14px] outline-none border rounded-full
               bg-white 
              border-[#d6d6d7] active:border-blue-500 focus:border-blue-500"
              onChange={(e) => handleFilterChange(e.target.value)}
              disabled={isLoading}
            >
              <option value="" disabled>
                Filter by Card Type
              </option>
              <option value="all">All</option>
              <option value="burner">Burner</option>
              <option value="subscription">Subscription</option>
            </select>
          </div>
        </div>

        {/* Grid view */}
        
          <div
            className=" mx-auto mt-6   grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 2xl:grid-cols-3 gap-4 "
          >
            {filteredData && filteredData.length > 0
              ? filteredData.map((item: any) => (
                  <Card key={item.name} item={item} />
                )) :
             isLoading ? Array.from({ length: 3 }).map((_, i) => (
                  <SpendCardSkeleton key={i} />
                )) : null}
          </div>
      

        {/* fallback UI */}
        {!isLoading && filteredData && filteredData.length === 0 ? (
          <div className="w-full h-[300px] flex flex-col items-center justify-center gap-4">
            <h3 className="text-gray-500 text-lg">No results found</h3>
          </div>
        ) : null}

        <div ref={loaderRef}></div>
      </div>
    </LayoutWrapper>
  );
};

export default Home;
