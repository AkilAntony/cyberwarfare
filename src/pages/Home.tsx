import { Card } from "@/components/Card";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import { API_RESPONSE } from "@/utils/data";
 

const Home = () => {
  return (
    <LayoutWrapper>
      <div
        className="   section-wrapper mx-auto  grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 2xl:grid-cols-4 gap-4 "
      >
        {API_RESPONSE.data.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>
    </LayoutWrapper>
  );
};

export default Home;
