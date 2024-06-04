const obtenerFecha = () => {
    const a = new Date();
    const month = a.getMonth() + 1;
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
  
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = date < 10 ? `0${date}` : date;
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMin = min < 10 ? `0${min}` : min;
  
    const time = `${formattedDate}/${formattedMonth} ${formattedHour}:${formattedMin}`;
    return time;
  };
  
  export default obtenerFecha;