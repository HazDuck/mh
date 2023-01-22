const yearsSincePurchase = (purchase) => {
  const now = new Date();
  let yearsDiff;
  //if the purchase time is after now return null, else return the number of years
  if (purchase.getTime() > now.getTime()) {
    yearsDiff = null
  } else {
    yearsDiff =  now.getFullYear() - purchase.getFullYear();
  }
  if (yearsDiff === 0) {
    yearsDiff = 1
  }
  return yearsDiff;
}

export default yearsSincePurchase