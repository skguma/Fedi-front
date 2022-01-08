import React, { useRef } from "react";
import styled from "styled-components";
import data from "./data.json";
import { ForceGraph } from "./NetworkGraph";

const PageMoveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
`;

const Networkmap = () => {
  const nodeHoverTooltip = React.useCallback(node => {
    return `<div>${node.name}</div>`;
  }, []);
  return (
    <PageMoveWrapper>
      <ForceGraph
        linksData={data.links}
        nodesData={data.nodes}
        nodeHoverTooltip={nodeHoverTooltip}
      />
    </PageMoveWrapper>
  );
};

export default Networkmap;
