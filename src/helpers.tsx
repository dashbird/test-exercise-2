export function randomValueGenerator(min: number, max: number, precision: number) {
  return Math.floor(Math.random() * (max * precision - min * precision) + min * precision) / (1*precision);
}