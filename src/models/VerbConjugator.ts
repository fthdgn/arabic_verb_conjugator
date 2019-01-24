import {
  normalize
} from '../models/Utils'

export const FATHA = '\u064e'
export const KASRA = '\u0650'
export const DAMMA = '\u064f'
export const SUKUN = '\u0652'
export const SHADDA = '\u0651'

export enum Tense {
  PAST,
  NON_PAST,
  SUBJUNCTIVE,
  JUSSIVE,
  IMPERATIVE
}

export enum Count {
  SINGULAR,
  DUAL,
  PLURAL
}

export enum Gender {
  MALE,
  FEMALE
}

export enum Person {
  FIRST,
  SECOND,
  THIRD
}

const ALIF_HAMZA_ABOVE = '\u0623'
const ALIF_MADDA_ABOVE = '\u0622'
const PREFIX_AA = '\u0623' + FATHA
const PREFIX_NAA = '\u0646' + FATHA
const PREFIX_TA = '\u062a' + FATHA
const PREFIX_YA = '\u064a' + FATHA
const PREFIX_ALIF = '\u0627'

const SUFFIX_TU = '\u062a' + DAMMA
const SUFFIX_TA = '\u062a' + FATHA
const SUFFIX_TI = '\u062a' + KASRA
const SUFFIX_AT = FATHA + '\u062a' + SUKUN
const SUFFIX_TUMAA = '\u062a' + DAMMA + '\u0645' + FATHA + '\u0627'
const SUFFIX_TUM = '\u062a' + DAMMA + '\u0645' + SUKUN
const SUFFIX_AA = FATHA + '\u0627'
const SUFFIX_ATAA = FATHA + '\u062a' + SUFFIX_AA
const SUFFIX_TUNNA = '\u062a' + DAMMA + '\u0646' + FATHA + SHADDA
const SUFFIX_UU = DAMMA + '\u0648' + '\u0627'
const SUFFIX_IINA = KASRA + '\u064a' + '\u0646' + FATHA
const SUFFIX_II = KASRA + '\u064a'
const SUFFIX_AANI = FATHA + '\u0627' + '\u0646' + KASRA
const SUFFIX_UUNA = DAMMA + '\u0648' + '\u0646' + FATHA
const SUFFIX_NA = '\u0646' + FATHA
const SUFFIX_NAA = '\u0646' + FATHA + '\u0627'

export default class VerbConjugator {
  private static replaceCharAt (word: string, index: number, replacement: string) {
    return (
      word.substr(0, index) +
      replacement +
      word.substr(index + replacement.length)
    )
  }
  private static removeCharAt (word: string, index: number) {
    return word.substr(0, index) + word.substr(index + 1)
  }

  private static getPastBaseForm (
    radicals: {
      first: string,
      second: string,
      third: string
    },
    pastHaraka: string
  ): string {
    return (
      radicals.first +
      FATHA +
      radicals.second +
      pastHaraka +
      radicals.third
    )
  }

  private static getNonPastBaseForm (
    radicals: {
      first: string,
      second: string,
      third: string
    },
    nonPastHaraka: string
  ): string {
    return (
      radicals.first +
      SUKUN +
      radicals.second +
      nonPastHaraka +
      radicals.third
    )
  }

  private static getImperativeHaraka (nonPastHaraka: string): string {
    if (nonPastHaraka === DAMMA) {
      return DAMMA
    } else {
      return KASRA
    }
  }

  private static getSuffix (
    tense: Tense,
    number: Count,
    person: Person,
    gender: Gender
  ): string {
    if (tense === Tense.PAST) {
      if (number === Count.SINGULAR) {
        if (person === Person.FIRST) {
          return SUKUN + SUFFIX_TU
        } else if (person === Person.SECOND) {
          return (
            SUKUN +
            (gender === Gender.MALE ? SUFFIX_TA : SUFFIX_TI)
          )
        } else if (person === Person.THIRD) {
          return gender === Gender.MALE ? FATHA : SUFFIX_AT
        }
      } else if (number === Count.DUAL) {
        if (person === Person.SECOND) {
          return SUKUN + SUFFIX_TUMAA
        } else if (person === Person.THIRD) {
          return gender === Gender.MALE ? SUFFIX_AA : SUFFIX_ATAA
        }
      } else if (number === Count.PLURAL) {
        if (person === Person.FIRST) {
          return SUKUN + SUFFIX_NAA
        } else if (person === Person.SECOND) {
          return (
            SUKUN +
            (gender === Gender.MALE ? SUFFIX_TUM : SUFFIX_TUNNA)
          )
        } else if (person === Person.THIRD) {
          return gender === Gender.MALE
            ? SUFFIX_UU
            : SUKUN + SUFFIX_NA
        }
      }
    }
    if (tense === Tense.IMPERATIVE) {
      if (number === Count.SINGULAR) {
        return gender === Gender.MALE ? SUKUN : SUFFIX_II
      } else if (number === Count.DUAL) {
        return SUFFIX_AA
      } else if (number === Count.PLURAL) {
        return gender === Gender.MALE
          ? SUFFIX_UU
          : SUKUN + SUFFIX_NA
      }
    } else {
      if (number === Count.SINGULAR) {
        if (person === Person.SECOND && gender === Gender.FEMALE) {
          if (tense === Tense.NON_PAST) {
            return SUFFIX_IINA
          } else if (tense === Tense.SUBJUNCTIVE) {
            return SUFFIX_II
          } else if (tense === Tense.JUSSIVE) {
            return SUFFIX_II
          }
        } else {
          if (tense === Tense.NON_PAST) {
            return DAMMA
          } else if (tense === Tense.SUBJUNCTIVE) {
            return FATHA
          } else if (tense === Tense.JUSSIVE) {
            return SUKUN
          }
        }
      } else if (number === Count.DUAL) {
        if (tense === Tense.NON_PAST) {
          return SUFFIX_AANI
        } else {
          return SUFFIX_AA
        }
      } else if (number === Count.PLURAL) {
        if (person === Person.FIRST) {
          if (tense === Tense.NON_PAST) {
            return DAMMA
          } else if (tense === Tense.SUBJUNCTIVE) {
            return FATHA
          } else if (tense === Tense.JUSSIVE) {
            return SUKUN
          }
        } else {
          if (gender === Gender.MALE) {
            if (tense === Tense.NON_PAST) {
              return SUFFIX_UUNA
            } else {
              return SUFFIX_UU
            }
          } else {
            return SUKUN + PREFIX_NAA
          }
        }
      }
    }
    return ''
  }

  private static getPrefix (
    tense: Tense,
    number: Count,
    person: Person,
    gender: Gender,
    nonPastHaraka: string
  ): string {
    if (tense === Tense.IMPERATIVE) {
      return PREFIX_ALIF + this.getImperativeHaraka(nonPastHaraka)
    }
    if (tense !== Tense.PAST) {
      if (number === Count.SINGULAR && person === Person.FIRST) {
        return PREFIX_AA
      }
      if (number === Count.PLURAL && person === Person.FIRST) {
        return PREFIX_NAA
      }

      if (person === Person.SECOND) {
        return PREFIX_TA
      } else if (person === Person.THIRD) {
        if (gender === Gender.FEMALE && number !== Count.PLURAL) {
          return PREFIX_TA
        }
        return PREFIX_YA
      }
    }

    return ''
  }

  public static conjugate (
    radicals: {
      first: string,
      second: string,
      third: string
    },
    harakat: {
      past: string,
      nonPast: string
    },
    options: {
      assimilateFirstWaw?: boolean,
      shortenImperative?: boolean
    },
    tense: Tense,
    count: Count,
    person: Person,
    gender: Gender
  ): string {
    let isGeminated = radicals.second === radicals.third
    let isFirstRadicalWaw = radicals.first === '\u0648'
    let isFirstRadicalYa = radicals.first === '\u064a'
    let isFirstRadicalHamza = radicals.first === '\u0621'
    let assimilateFirstWaw = isFirstRadicalWaw && options.assimilateFirstWaw

    if (isFirstRadicalHamza) {
      // Replace hamze with alif with hamza above
      radicals.first = ALIF_HAMZA_ABOVE
    }

    var baseWord: string
    var suffix = this.getSuffix(tense, count, person, gender)
    var prefix = this.getPrefix(tense, count, person, gender, harakat.nonPast)
    if (tense === Tense.PAST) {
      baseWord = this.getPastBaseForm(radicals, harakat.past)
    } else {
      baseWord = this.getNonPastBaseForm(radicals, harakat.nonPast)
    }

    var returnValues: Array<string> = []

    // Some imperative forms are shorthened
    if (tense === Tense.IMPERATIVE) {
      // If first waw is an asimilated waw or
      // First radical is hamzated and shortened version is requested
      if ((isFirstRadicalHamza && options.shortenImperative) || assimilateFirstWaw) {
        // Remove first radical and its haraka
        baseWord = baseWord.substring(2, baseWord.length)
        // Remove imperative prefix
        prefix = ''
      }
    } else {
      // If first waw is an asimilated waw and there is a prefix,
      // waw is always removed
      if (assimilateFirstWaw && prefix !== '') {
        baseWord = baseWord.substring(2, baseWord.length)
      }
    }

    // Only plural female and singular male conjugations of geminated verbs
    // have imperative prefix.
    if (isGeminated) {
      if (tense === Tense.IMPERATIVE) {
        if (count === Count.PLURAL && gender === Gender.FEMALE) {
        } else if (count === Count.SINGULAR && gender === Gender.MALE) {
        } else {
          prefix = ''
        }
      }
    }

    // If the root is geminated and the suffix does not start with sukun,
    // merge second and third radicals with shadda
    if (isGeminated && suffix.charAt(0) !== SUKUN) {
      baseWord = baseWord.substring(0, baseWord.length - 2) + SHADDA
      if (tense === Tense.PAST) {
        baseWord = this.replaceCharAt(baseWord, 1, FATHA)
      } else {
        baseWord = this.replaceCharAt(baseWord, 1, harakat.nonPast)
      }
    }

    // Singular first person vowel merging
    if (isFirstRadicalHamza) {
      if (prefix === PREFIX_AA) {
        baseWord = baseWord.substr(2)
        prefix = ALIF_MADDA_ABOVE
      }
    }

    returnValues.push(prefix + baseWord + suffix)

    // Add shaddah forms for genimated conjugations where suffix is only a sukun
    if (isGeminated && suffix === SUKUN) {
      var word = returnValues.pop()
      if (word !== undefined) {
        // Remove second and third radicals with their modifiers and add shadda to second radical
        var wordRoot = word.substr(0, word.length - 3) + SHADDA
        // Replace sukun on firs radical with non past haraka
        wordRoot = this.replaceCharAt(wordRoot, 3, harakat.nonPast)
        if (tense === Tense.IMPERATIVE) {
          // Only sukun previx is on singular second person male.
          // Alternative genimated versions does not have prefix
          // Remove imperative prefix
          wordRoot = wordRoot.substring(2)
        }
        // Add fatha and kasra versions
        returnValues.push(wordRoot + FATHA)
        returnValues.push(wordRoot + KASRA)
        // Add original version
        returnValues.push(word)
      }
    }

    // Imperative prefix long vowel convertion
    if (tense === Tense.IMPERATIVE && prefix !== '') {
      if (
        // If waw is assimilated, there is no waw convert to long vowel
        (isFirstRadicalWaw && !assimilateFirstWaw) ||
        isFirstRadicalYa ||
        isFirstRadicalHamza
      ) {
        // Get imperative from. For geminated verbs only the last version has prefix
        var imperativeForm = returnValues.pop()
        if (imperativeForm !== undefined) {
          // Remove haraka of first radical
          imperativeForm = this.removeCharAt(imperativeForm, 3)
          // Replace first radical with appropiate long vowel
          if (this.getImperativeHaraka(harakat.nonPast) === KASRA) {
            imperativeForm = this.replaceCharAt(imperativeForm, 2, '\u064a')
          } else {
            imperativeForm = this.replaceCharAt(imperativeForm, 2, '\u0648')
          }
          returnValues.push(imperativeForm)
        }
      }
    }

    var returnV = ''
    for (var i = 0; i < returnValues.length; i++) {
      returnV += returnValues[i]
      if (i !== returnValues.length - 1) { returnV += '\n' }
    }
    return normalize(returnV)
  }
}

export {
  VerbConjugator
}
