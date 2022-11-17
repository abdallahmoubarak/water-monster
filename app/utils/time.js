export const timeChanger = (od) => {
  const date = new Date(od);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const dateTimeChanger = (od) => {
  const date = new Date(od);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const strTime =
    day +
    "/" +
    (parseInt(month) + 1) +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    " " +
    ampm;
  return strTime;
};
