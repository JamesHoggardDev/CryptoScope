export const formatData = (data) => {
  let finalData = {
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        fill: false,
        backgroundColor: "#ff8200",
        borderColor: "rgba(255, 99, 132, 0.2)"
      }
    ]
  };
  let dates = data.map((val) => {
    const ts = val[0];
    let date = new Date(ts * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let final = `${month}-${day}-${year}`;
    return final;
  });
  let priceArr = data.map((val) => {
    return val[4];
  });
  priceArr.reverse();
  dates.reverse();
  finalData.labels = dates;
  finalData.datasets[0].data = priceArr;
  return finalData;
};