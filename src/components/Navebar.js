import { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundery";
import axios from "axios";

const GetData = () => {
  if (true) {
    throw new Error("Data not found");
  }
};

const Navbar = () => {
  const [length, setLength] = useState(10);
  const [data, setData] = useState([]);
  const [buttonArr, setButtonArr] = useState([1]);
  const limit = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= length / 10; i++) {
      arr.push(1);
    }

    setButtonArr(arr);
  }, [length]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.postmyad.ai/api/device/getdevice?status=Active&page=${page}&limit=${limit}&keyword=null&sortBy=_id&sortType=-1&isDelete=false&testing=false&district=All`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzY5MmM2MWE4YTI0MjkzOWY0ZDNhMCIsImlhdCI6MTczNDIwNjYxNSwiZXhwIjoxNzM1MDcwNjE1fQ.Qe3htF0kxhwuU-raZM0pW98aTs8l-gnGflLuTA3fl6Q",
        },
      }
    );

    const data = response.data;
    setLength(data.lengthData);
    setData(data.msg);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nextPage = (page) => {
    setPage(page);
    console.log("calling next page is : ", page);
    fetchData();
  };
  return (
    <div>
      <p>The application page is : </p>
      {/* <ErrorBoundary>
        <GetData />
      </ErrorBoundary> */}
      {data.map((item, ind) => {
        return <div key={ind * 100 + 100}>Device is : {item?.deviceUID}</div>;
      })}

      {buttonArr.map((item, ind) => {
        return (
          <button key={ind} onClick={() => nextPage(ind + 1)}>
            {ind + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
