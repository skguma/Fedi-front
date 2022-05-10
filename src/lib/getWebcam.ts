export const getWebcam = (callback: any) => {
  try {
    const constraints = {
      video: true,
      audio: false, // audio는 닫기
    };
    navigator.mediaDevices.getUserMedia(constraints).then(callback); // promise 객체 리턴
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
