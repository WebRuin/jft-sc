import React from "react";
import styled from "styled-components";
import { useState } from "react";

import LastThreePages from "./LastThreePages";
import ContributeForm from "./ContributeForm";

const ContributeBody = () => {
  const [rev, setRev] = useState(new Date().valueOf());

  return (
    <StyledContributeBody>
      <LastThreePages rev={rev} />
      <ContributeForm
        onSuccess={() => {
          setRev(new Date().valueOf());
        }}
      />
    </StyledContributeBody>
  );
};

const StyledContributeBody = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.secondaryDark};
  border-top: 2px solid ${({ theme }) => theme.colors.highlight};
  border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
  padding: 2rem;
`;

export default ContributeBody;
