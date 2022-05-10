import React, { useEffect, useState } from 'react';
import Networkmap from '../components/NetworkGraph/Networkmap';
import axios from 'axios';
import { useParams } from "react-router";
function NetworkmapContainer() {
  const [data, setData] = useState();
  
  const { tweetId } = useParams();
  console.log(tweetId);

  useEffect(() => {
    async function get() {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const getNetworkData = await axios
        .get(`http://15.165.149.176:8080/retweets/${tweetId}`, config)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    get();
  }, []);

  return <Networkmap data={data} />;
}

export default NetworkmapContainer;
