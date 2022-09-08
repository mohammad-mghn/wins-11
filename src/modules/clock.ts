export const clockHandler = (id: string) => {
  const element: HTMLElement | null = document.getElementById(id);

  function clock() {
    //  First check if element exist to prevent some index rendering errors
    if (element) {
      const currentTime: Date = new Date();

      let hours: number = currentTime.getHours();
      let mins: string = currentTime.getMinutes().toString();

      // check that if minutes are greater than 10. if not we'll 0 ti left side like 8 => 08
      if (+mins < 10) {
        mins = "0" + mins;
      }

      var AMOrPM = "PM";

      if (hours > 12) {
        AMOrPM = "PM";
        hours -= 12;
      } else {
        AMOrPM = "AM";
      }

      let clockText = `${hours}:${mins} ${AMOrPM}`;

      element.innerText = clockText;

      setTimeout(clock, 1000);
    }
  }
  clock();
};
