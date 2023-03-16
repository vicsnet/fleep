// import React from 'react'

// const Cal = () => {
//   const [month, setMonth] = useState(new Date().getMonth() + 1);
//   const [year, setYear] = useState(new Date().getFullYear());

//   function getDaysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
//   }

//   function getFirstDayOfMonth(month, year) {
//     return new Date(year, month - 1, 1).getDay();
//   }

//   function prevMonth() {
//     setMonth(month - 1);
//     if (month === 1) {
//       setYear(year - 1);
//       setMonth(12);
//     }
//   }

//   function nextMonth() {
//     setMonth(month + 1);
//     if (month === 12) {
//       setYear(year + 1);
//       setMonth(1);
//     }
//   }

//   const daysInMonth = getDaysInMonth(month, year);
//   const firstDayOfMonth = getFirstDayOfMonth(month, year);

//   return (
//    <div className="">
//      <h2>{`${month}/${year}`}</h2>
//       <button onClick={prevMonth}>Previous Month</button>
//       <button onClick={nextMonth}>Next Month</button>


//    </div>
//   );
// }

// export default Cal