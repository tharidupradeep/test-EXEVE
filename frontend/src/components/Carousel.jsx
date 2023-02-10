import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";

const Carousel = ({ Slides, Infinite }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:3600/getAll");
      setData(data);
    };

    getData();
  }, []);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="p-10">
      <Card
        image={data[activeIndex]?.image}
        title={data[activeIndex]?.title}
        subTitle={data[activeIndex]?.subTitle}
        onP={handlePrev}
        onN={handleNext}
        Infinite
        index={activeIndex}
        len={data.length - 1}
      />
    </div>
  );
};

export default Carousel;
