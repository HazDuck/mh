const formatPrice = (value, showDecimals = false) => {
  const formattedValue = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(value)

  return formattedValue
}

export default formatPrice