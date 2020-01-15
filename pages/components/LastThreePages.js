import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import PageSummary from "./PageSummary";

const lastThreePages = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/get");
      const newData = await res.json();
      setData(getLastThree(newData));
    }
    getData();
  }, [props.rev]);

  const getLastThree = arr => {
    const lastThree = arr.slice(Math.max(arr.length - 3, 1));
    return lastThree.reverse();
  };

  return (
    <StyledLastThreePages>
      <h2>Last Three Pages</h2>
      <p className="motivation">Just in case you need motivation.</p>
      {data.length > 0 ? (
        data.map(d => (
          <PageSummary
            key={d.ts}
            id={d.ts}
            body={d.data.body}
            date={d.data.date}
            email={d.data.email}
            name={d.data.name}
            readableDate={d.data.readableDate}
            title={d.data.title}
          />
        ))
      ) : (
        <CenterSpinner>
          <Loader
            type="Oval"
            color="#cc5804"
            height={100}
            width={100}
            timeout={3000}
          />
        </CenterSpinner>
      )}
    </StyledLastThreePages>
  );
};

const CenterSpinner = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

const StyledLastThreePages = styled.section`
  width: 30%;
  padding: 0.5rem;
  padding-top: 0;
  color: ${({ theme }) => theme.colors.text};

  p,
  h2 {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  h2 {
    margin-bottom: 0;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.75rem;
  }
  .motivtion {
    padding: 0.2rem 0 0 0;
  }
`;

export default lastThreePages;
