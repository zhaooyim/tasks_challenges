export function numberToAccountingString(amount) {
  if ( (typeof amount !== 'number') | (isNaN(amount) === true)) return "-"
  else if (amount < 0) return `(${Math.abs(amount).toFixed(2)})`
  else return amount.toFixed(2)
}

