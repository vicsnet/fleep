var moment = require("moment");

export class CalenderUtil {
  inComingYear;
  inComingMonth;

  static #convertNumberOfDaysList(numberOfDaysList) {

    return numberOfDaysList.map((day) => {
      const getDayInWord = moment(
        new Date(`${this.inComingYear}-${this.inComingMonth}-${day}`)
      ).format("dddd");
   
const formatedDay = `${day}`.padStart(2, '0');
const formatedMonth = `${this.inComingMonth}`.padStart(2, '0');
      return {
        num: day,
        day: getDayInWord,
        month: this.inComingMonth,
        year: this.inComingYear,

    formatedDate: `${this.inComingYear}-${formatedMonth}-${formatedDay}`


      };
    });
  }

  static updateIncomingDate(incomingdate) {
    let lastDayOfMonth = new Date(
      incomingdate.getFullYear(),
      incomingdate.getMonth() + 1,
      0
    );
    let numberOfDays = lastDayOfMonth.getDate();
    const numberOfDaysList = Array.from(
      { length: numberOfDays },
      (val, i) => 1 + i
    );
    this.inComingYear = incomingdate.getFullYear();
    this.inComingMonth = incomingdate.getMonth() + 1;
    const convertedDays =
      CalenderUtil.#convertNumberOfDaysList(numberOfDaysList);
    return convertedDays;
  }
}
