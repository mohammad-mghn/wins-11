export const dateHandler = (isNumeric: boolean, id: string) => {
  const element: HTMLElement | null = document.getElementById(id);

  if (element) {
    if (isNumeric) {
      const numericDateHandler: () => void = () => {
        const date: Date = new Date();

        const year: number = date.getFullYear();
        const dayIndex: number = date.getDate();
        const monthIndex: number = date.getMonth();

        const dateText = `${monthIndex + 1}/${dayIndex}/${year}`;

        element.innerText = dateText;

        setTimeout(numericDateHandler, 60 * 60 * 1000);
      };
      numericDateHandler();
    } else {
      const lettersDateHandler: () => void = () => {
        const date: Date = new Date();

        const day: number = date.getDate();

        // get indexes to get weekday, or month name
        const weekDayIndex: number = date.getDay();
        const monthIndex: number = date.getMonth();

        const months: string[] = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const weekdays: string[] = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday"];

        const dateText: string = `${weekdays[weekDayIndex]}, ${months[monthIndex]} ${day}`;

        element.innerText = dateText;
      };
      lettersDateHandler();
    }
  }
};
