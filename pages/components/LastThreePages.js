import { useEffect, useState } from "react";
import styled from "styled-components";

import PageSummary from "./PageSummary";

const lastThreePages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/get");
      const newData = await res.json();
      setData(newData);
    }
    getData();
  }, []);

  return (
    <StyledLastThreePages>
      <h2>Last Three Pages</h2>
      <p className="motivation">Just in case you need motivation.</p>
      {data.length > 0 ? (
        data.map(d => (
          <PageSummary
            key={d.ts}
            body={d.data.body}
            date={d.data.date}
            email={d.data.email}
            name={d.data.name}
            title={d.data.title}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </StyledLastThreePages>
  );
};

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
