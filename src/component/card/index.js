import React from "react";

const Card = ({ data, filtered, setFiltered }) => {
  const handleClick = (item) => {
    if (filtered.includes(item)) {
      let newarray = filtered.filter((i) => i !== item);
      setFiltered(newarray);
      return;
    }
    setFiltered((prevState) => [...prevState, item]);
  };

  return (
    <div className="flex flex-col my-6 relative md:flex-row md:flex md:justify-between px-6 py-4 bg-white w-[100%] md:my-2 md:items-center shadow-md">
      <div className="my-4 md:flex justify-start gap-4">
        <img
          src={data.logo}
          alt={data.logo}
          className="absolute top-0 left-0 w-[15%] translate-y-[-50%] md:relative md:w-auto md:translate-y-0 object-contain"
        />
        <div>
          <div className="flex gap-4 items-center">
            <p className="text-md text-primary font-bold ">{data.company}</p>
            {data.new && (
              <p className="text-[10px] bg-primary font-bold text-white rounded-xl flex items-center justify-center px-1 py-1">
                NEW!
              </p>
            )}
            {data.featured && (
              <p className="text-[10px] bg-black font-bold text-white rounded-xl flex items-center justify-center px-1 py-1">
                FEATURED
              </p>
            )}
          </div>
          <p className="text-xl font-semibold text-primary mt-4">
            {data.position}
          </p>
          <div className="flex">
            <p className="text-md text-cyan-600 font-semibold">
              {data.postedAt} . {data.contract} . {data.location}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-2 pt-4 flex gap-4 md:border-0 flex-wrap">
        {data.role && (
          <p
            className={`${
              filtered.includes(data.role)
                ? "text-white bg-primary py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
                : "text-primary bg-cyan-300 py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
            }`}
            onClick={() => handleClick(data.role)}
          >
            {data.role}
          </p>
        )}
        {data.level && (
          <p
            className={`${
              filtered.includes(data.level)
                ? "text-white bg-primary py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
                : "text-primary bg-cyan-300 py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
            }`}
            onClick={() => handleClick(data.level)}
          >
            {data.level}
          </p>
        )}
        {data.contract && (
          <p
            className={`${
              filtered.includes(data.contract)
                ? "text-white bg-primary py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
                : "text-primary bg-cyan-300 py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
            }`}
            onClick={() => handleClick(data.contract)}
          >
            {data.contract}
          </p>
        )}
        {data.languages.map((item, index) => (
          <p
            key={index}
            // className={`text-primary bg-cyan-300 py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary`}
            className={`${
              filtered.includes(item)
                ? "text-white bg-primary py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
                : "text-primary bg-cyan-300 py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </p>
        ))}
        {data.tools.map((item, index) => (
          <p
            key={index}
            // className={`text-primary bg-cyan-300 py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary`}
            className={`${
              filtered.includes(item)
                ? "text-white bg-primary py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
                : "text-primary bg-cyan-300 py-2 px-2 cursor-pointer font-semibold text-md rounded-md hover:text-white hover:bg-primary"
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
