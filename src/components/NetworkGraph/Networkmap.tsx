import React from 'react';
import styled from 'styled-components';
import { ForceGraph } from './NetworkGraph';

const Networkmap = ({ data }) => {
  const nodeHoverTooltip = React.useCallback((node) => {
    const openUrl = () => window.open(node.url, '_blank');
    return `<div>${node.accountId}</div>`;
  }, []);

  return (
    <PageMoveWrapper>
      {data && (
        <ForceGraph
          linksData={data.links}
          nodesData={data.nodes}
          nodeHoverTooltip={nodeHoverTooltip}
        />
      )}
    </PageMoveWrapper>
  );
};

export default Networkmap;

const PageMoveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
`;
