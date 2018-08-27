export const createDataPoint = (time = Date.now(), magnitude = 1000, offset = 0) => {
    return [
      time + offset * magnitude,
      Math.round((Math.random() * 100) * 2) / 2
    ];
  };
  
  export const createRandomData = (time: any, magnitude = 1000, points = 100) => {
    const data = [];
    let i = (points * -1) + 1;
    for (i; i <= 0; i++) {
      data.push(createDataPoint(time, magnitude, i));
    }
    return data;
  };
  
  export const addDataPoint = (data: any, toAdd: any) => {
    if (!toAdd) {
        toAdd = createDataPoint();
    }
    const newData = data.slice(0); // Clone
    newData.push(toAdd);
    return newData;
  };