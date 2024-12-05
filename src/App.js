import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/card";
import { data } from "./data";

function App() {
  const [jobdata, setJobData] = useState(null);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (data) {
      setJobData(data);
    }
  }, []);

  useEffect(() => {
    let newfilteredarray = [];
    if (filtered.length > 0) {
      for (let i = 0; i < filtered.length; i++) {
        for (let j = 0; j < jobdata.length; j++) {
          Object.keys(jobdata[j]).map((item) => {
            if (Array.isArray(jobdata[j][item])) {
              jobdata[j][item].forEach((arrItem) => {
                if (filtered[i].includes(arrItem)) {
                  newfilteredarray.push(jobdata[j]);
                  return;
                }
              });
            } else {
              if (filtered[i].includes(jobdata[j][item])) {
                newfilteredarray.push(jobdata[j]);
                return;
              }
            }
          });
        }
      }
      const uniqueArray = [];
      newfilteredarray.forEach((value) => {
        if (!uniqueArray.includes(value)) {
          uniqueArray.push(value);
        }
      });
      setJobData(uniqueArray);
    } else {
      setJobData(data);
    }
  }, [filtered]);

  const handleRemove = (item) => {
    const newarray = filtered.filter((i) => i !== item);
    setFiltered(newarray);
  };

  if (!jobdata) return <p>loading</p>;

  return (
    <div className="w-[100%] bg-cyan-300 min-h-[100vh] flex flex-col items-center font-custom">
      <div className="relative w-[100%]">
        <img
          src="./images/bg-header-desktop.svg"
          alt="bg"
          className="bg-primary w-[100%]"
        />
        <div
          className={` ${filtered.length > 0 ? "py-2 bg-white" : ""}
           absolute w-[70%] top-[100%] left-[50%] translate-x-[-50%] translate-y-[-40%] flex flex-wrap my-2 `}
        >
          {filtered &&
            filtered.length > 0 &&
            filtered.map((item, index) => (
              <div className="flex px-6 items-center gap-0 pt-2" key={index}>
                <p className="font-bold text-md text-primary bg-cyan-300 p-1 px-2 ml-2 ">
                  {item}
                </p>
                <img
                  src="/images/icon-remove.svg"
                  alt="remove"
                  className="bg-primary p-2 text-md rounded-sm"
                  onClick={() => handleRemove(item)}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-12 w-[100%]">
        {jobdata &&
          jobdata.map((item, index) => (
            <div key={index} className="w-[70%]">
              <Card
                data={item}
                key={index}
                filtered={filtered}
                setFiltered={setFiltered}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
