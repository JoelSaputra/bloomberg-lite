
const formatNumber = (n) => {
  if (n == null || n == undefined) return 'N/A'
  const abs = Math.abs(n)
  const sign = n < 0 ? '-' : ''
  if (abs >= 1e12) return sign + (abs / 1e12).toFixed(2) + 'T'
  if (abs >= 1e9)  return sign + (abs / 1e9).toFixed(2) + 'B'
  if (abs >= 1e6)  return sign + (abs / 1e6).toFixed(2) + 'M'
  if (abs >= 1e3)  return sign + (abs / 1e3).toFixed(1) + 'K'
  return `${n}`
}

export default formatNumber

