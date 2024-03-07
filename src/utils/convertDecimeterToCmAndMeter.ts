export const convertDecimeterToCmAndMeter = (value: number | null | undefined): string => {
  if (value === null || value === undefined) {
    return 'N/A'
  }

  const meters = Math.floor(value / 10)
  const centimeters = (value % 10) * 10

  let result = ''
  if (meters > 0) {
    result += `${meters}m`
    if (centimeters > 0) {
      result += `${centimeters}`
    }
  } else {
    result += `${centimeters}cm`
  }

  return result
}
