var moment = require("moment");

export class CalenderUtil {


  static #convertNumberOfDaysList(numberOfDaysList) {
    return numberOfDaysList.map((day) => {
      const getDayInWord = moment(
        new Date(`${this.inComingYear}-${this.inComingMonth}-${day}`)
      ).format("dddd");
      return {
        num: day,
        day: getDayInWord,
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

    const convertedDays =
      CalenderUtil.#convertNumberOfDaysList(numberOfDaysList);
    return convertedDays;
  }
}
