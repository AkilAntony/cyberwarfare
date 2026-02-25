
import { Card } from "@/components/Card";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import { API_RESPONSE } from "@/utils/data";
import React, { useEffect, useRef, useState } from "react";

const LoadingUI = React.lazy(
  () => import("@/components/productCard/SpendCardSkeleton"),
);


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

  //  useEffect(() => {

  //   const observer = new IntersectionObserver((entries) => {

  //   })

  //   return () => observer.unobserve(bottomRef.current.isI)
  //  }, [])

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

  console.log("data outside then", data);
  return (
    <LayoutWrapper>
      <div
        className="section-wrapper mx-auto  grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 2xl:grid-cols-4 gap-4 "
      >
        {/* loading UI */}

        {isLoading
          ? Array.from({ length: 10 }).map((ele) => <LoadingUI />)
          : data.map((item: any) => <Card key={item.name} item={item} />)}

        {}
      </div>

      <div ref={bottomRef}></div>
    </LayoutWrapper>
  );
};

export default Home;
