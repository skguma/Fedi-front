// 결과 페이지 데이터 컨테이너
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Networkmap from '../components/NetworkGraph/Networkmap';
import fetchResultAPIData from '../modules/resultsData';
import axios from 'axios';

function NetworkmapContainer() {
  const [data, setData] = useState();
  // data에 저장된 정보 이용
  const fetchEmail = (data) => {
    let email = [];
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].url);
      email = email.concat({ tweetUrl: data[i].url });
    }
    console.log('email: ', email);

    // 스토어에 디스패치
    // fetchResultAPIData(email);
  };
  // const dispatch = useDispatch();

  const tweetId = useSelector((state) => ({ tweetId: state.reports.tweetId }));
  // console.log("tweetid", tweetId);

  // http://15.165.149.176:8080/networks
  useEffect(() => {
    async function get() {
      const getNetworkData = await axios
        .get(
          'https://38fa5e0d-5b04-4db0-bb06-d41907bb60ac.mock.pstmn.io/networks',
          { tweetId: tweetId }
        )
        .then((res) => {
          setData(res.data);
          console.log(res.data.nodes);
          //const data = res.data.nodes;
          //fetchData(data);
          fetchEmail(res.data.nodes);
        });
    }
    get();
  }, []);

  // data는 nodes배열과 links 배열로 이루어진 object임
  //fetchData(data);
  //console.log(Object.keys(data));
  //console.log(data.nodes);
  //fetchData(data.nodes);
  //console.log("nodes", data.nodes);
  //console.log("links", data.links);

  return <Networkmap data={data} />;
}

export default NetworkmapContainer;
