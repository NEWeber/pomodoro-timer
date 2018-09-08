export default function (amount) {
  let returnVal;
  if (amount >= 10) {
    returnVal = amount;
  } else {
    returnVal = `0${amount}`;
  }
  return returnVal;
}
