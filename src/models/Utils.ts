export function normalize (word: string): string {
  var regex1 = /[\u0651][\u064f]+/ig
  word = word.replace(regex1, '\u064f\u0651')
  var regex2 = /[\u0651][\u064e]+/ig
  word = word.replace(regex2, '\u064e\u0651')
  var regex3 = /[\u0651][\u0650]+/ig
  word = word.replace(regex3, '\u0650\u0651')
  var regex4 = /[\u200e]+/ig
  word = word.replace(regex4, '')
  return word
}
