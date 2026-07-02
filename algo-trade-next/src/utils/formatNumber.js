
const formatNumber = (n) => {
  if (n == null || n == undefined) return 'N/A'
  else if (n >= 1e12){return (n / 1e12).toFixed(2) + 'T'}
  else if (n >= 1e9){return (n / 1e9).toFixed(2) + 'B'}
  else if (n >= 1e6){return (n / 1e6).toFixed(2) + 'M'}
  else if (n >= 1e3){return (n / 1e3).toFixed(2) + 'K'}

  else{
    return `${n}`
  }

}

export default formatNumber