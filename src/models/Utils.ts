export function normalize (word: string): string {
  let trimRegex = /[\u200e]+/ig
  word = word.replace(trimRegex, '')
  return word.normalize()
}
