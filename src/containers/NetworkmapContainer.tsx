import React, { useEffect, useState } from 'react';
import Networkmap from '../components/NetworkGraph/Networkmap';
import axios from 'axios';
import { useParams } from "react-router";

function NetworkmapContainer() {
  const [data, setData] = useState();
  const { tweetId } = useParams();

  useEffect(() => {
    async function get() {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const getNetworkData = await axios
        .get(`https://api.fedi.link/retweets/${tweetId}`, config)
        .then((res) => {
          setData(res.data);
        })
    }
    get();
  }, []);

  return <Networkmap data={data} />;
}

export default NetworkmapContainer;
