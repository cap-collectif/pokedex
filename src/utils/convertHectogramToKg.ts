export const convertHectogramToKg = (weight: number | null | undefined): string => {
  return weight ? Math.floor(weight / 10).toString() : 'N/A'
}
