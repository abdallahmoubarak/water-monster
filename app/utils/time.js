export const timeChanger = (od) => {
  const date = new Date(od);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let secounds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secounds = secounds < 10 ? "0" + secounds : secounds;

  const strTime = hours + ":" + minutes + ":" + secounds + " " + ampm;
  return strTime;
};
