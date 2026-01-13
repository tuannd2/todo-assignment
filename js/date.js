export function renderDate() {
  const now = new Date();

  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const dayNumber = now.getDate();
  const ordinalDay = dayNumber + getOrdinalSuffix(dayNumber);

  const month = now.toLocaleDateString("en-US", { month: "long" });

  document.getElementById("weekday-text").textContent = `${weekday},`;
  document.getElementById("day-ordinal-text").textContent = ordinalDay;
  document.getElementById("month-text").textContent = month;
}

function getOrdinalSuffix(day) {
  switch (day) {
    case day >= 11 && day <= 13:
      return "th";

    case day % 10 === 1:
      return "st";

    case day % 10 === 2:
      return "nd";

    case day % 10 === 3:
      return "rd";

    default:
      return "th";
  }
}
