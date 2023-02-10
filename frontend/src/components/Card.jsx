const Card = ({ image, title, subTitle, onP, onN, Infinite, index, len }) => {
  console.log(image);
  return (
    <div
      className="flex justify-between h-96 w-5/6 flex-row p-10 fade-in-out duration-300"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center ">
        {Infinite && index === 0 ? null : (
          <button onClick={onP}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="flex flex-col self-end w">
        <h2 className="text-white ">{title}</h2>
        <h6 className="text-white self-center">{subTitle}</h6>
      </div>
      <div className="flex justify-center  ">
        {Infinite && index === len ? null : (
          <button onClick={onN}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
