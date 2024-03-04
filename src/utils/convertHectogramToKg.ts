export const convertHectogramToKg = (weight: number | null | undefined): string => {
  return weight ? (weight / 10).toFixed(2) : 'N/A'
}
