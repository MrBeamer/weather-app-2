import { format } from "date-fns";

// Formate date
const formatDate = (date) => {
  //  Sunday, April 19
  return format(date, "EEEE, MMMM dd");
};

// Capitalize word
const capitalize = (word) => {
  return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
};

export { formatDate, capitalize };
