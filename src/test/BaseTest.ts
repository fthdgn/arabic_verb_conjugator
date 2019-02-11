import 'jest'
import {
  VerbConjugator,
  Tense,
  Person,
  Count,
  Gender
} from '../models/VerbConjugator'
import {
  normalize
} from '../models/Utils'

export function runTest (
  radicals: Radicals,
  harakat: Harakat,
  options: Options,
  conjugatedVerbs: {
    past: {
      singular: {
        firstPerson: string,
        secondPerson: {
          male: string,
          female: string
        }
        thirdPerson: {
          male: string,
          female: string
        },
      },
      dual: {
        secondPerson: string,
        thirdPerson: {
          male: string,
          female: string
        },
      },
      plural: {
        firstPerson: string,
        secondPerson: {
          male: string,
          female: string
        }
        thirdPerson: {
          male: string,
          female: string
        },
      },
    },
    nonPast: {
      singular: {
        firstPerson: string,
        secondPerson: {
          male: string,
          female: string
        }
        thirdPerson: {
          male: string,
          female: string
        },
      },
      dual: {
        secondPerson: string,
        thirdPerson: {
          male: string,
          female: string
        },
      },
      plural: {
        firstPerson: string,
        secondPerson: {
          male: string,
          female: string
        }
        thirdPerson: {
          male: string,
          female: string
        },
      },
    },

    subjunctive: {
      singular: {
        firstPerson: string,
        secondPerson: {
          male: string,
          female: string
        }
        thirdPerson: {
          male: string,
          female: string
        },
      },
      dual: {
        secondPerson: string,
        thirdPerson: {
          male: string,
          female: string
        },
      },
      plural: {
        firstPerson: string,
        secondPerson: {
          male: string,
          female: string
        }
        thirdPerson: {
          male: string,
          female: string
        },
      },
    },

    jussive: {
      singular: {
        firstPerson: string,
        secondPerson: {
          male: string,
          female: string
        }
        thirdPerson: {
          male: string,
          female: string
        },
      },
      dual: {
        secondPerson: string,
        thirdPerson: {
          male: string,
          female: string
        },
      },
      plural: {
        firstPerson: string,
        secondPerson: {
          male: string,
          female: string
        }
        thirdPerson: {
          male: string,
          female: string
        },
      },
    },
    imperative: {
      singular: {
        secondPerson: {
          male: string,
          female: string
        }
      },
      dual: {
        secondPerson: string,
      },
      plural: {
        secondPerson: {
          male: string,
          female: string
        }
      },
    }
  }
) {
  test('PAST SINGULAR FIRST', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.SINGULAR,
        Person.FIRST,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.past.singular.firstPerson))
  })
  test('PAST SINGULAR SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.SINGULAR,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.past.singular.secondPerson.male))
  })
  test('PAST SINGULAR SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.SINGULAR,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.past.singular.secondPerson.female))
  })
  test('PAST SINGULAR THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.SINGULAR,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.past.singular.thirdPerson.male))
  })
  test('PAST SINGULAR THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.SINGULAR,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.past.singular.thirdPerson.female))
  })
  test('PAST DUAL SECOND', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.DUAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.past.dual.secondPerson))
  })
  test('PAST DUAL THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.DUAL,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.past.dual.thirdPerson.male))
  })
  test('PAST DUAL THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,

        Tense.PAST,
        Count.DUAL,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.past.dual.thirdPerson.female))
  })
  test('PAST PLURAL FIRST', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.PLURAL,
        Person.FIRST,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.past.plural.firstPerson))
  })
  test('PAST PLURAL SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.PLURAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.past.plural.secondPerson.male))
  })
  test('PAST PLURAL SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.PLURAL,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.past.plural.secondPerson.female))
  })
  test('PAST PLURAL THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.PLURAL,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.past.plural.thirdPerson.male))
  })
  test('PAST PLURAL THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.PAST,
        Count.PLURAL,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.past.plural.thirdPerson.female))
  })
  test('NON_PAST SINGULAR FIRST', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.SINGULAR,
        Person.FIRST,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.singular.firstPerson))
  })
  test('NON_PAST SINGULAR SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.SINGULAR,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.singular.secondPerson.male))
  })
  test('NON_PAST SINGULAR SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.SINGULAR,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.singular.secondPerson.female))
  })
  test('NON_PAST SINGULAR THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.SINGULAR,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.singular.thirdPerson.male))
  })
  test('NON_PAST SINGULAR THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.SINGULAR,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.singular.thirdPerson.female))
  })
  test('NON_PAST DUAL SECOND', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.DUAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.dual.secondPerson))
  })
  test('NON_PAST DUAL THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.DUAL,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.dual.thirdPerson.male))
  })
  test('NON_PAST DUAL THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,

        Tense.NON_PAST,
        Count.DUAL,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.dual.thirdPerson.female))
  })
  test('NON_PAST PLURAL FIRST', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.PLURAL,
        Person.FIRST,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.plural.firstPerson))
  })
  test('NON_PAST PLURAL SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.PLURAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.plural.secondPerson.male))
  })
  test('NON_PAST PLURAL SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.PLURAL,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.plural.secondPerson.female))
  })
  test('NON_PAST PLURAL THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.PLURAL,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.plural.thirdPerson.male))
  })
  test('NON_PAST PLURAL THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.NON_PAST,
        Count.PLURAL,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.nonPast.plural.thirdPerson.female))
  })
  test('SUBJUNCTIVE SINGULAR FIRST', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.SINGULAR,
        Person.FIRST,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.singular.firstPerson))
  })
  test('SUBJUNCTIVE SINGULAR SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.SINGULAR,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.singular.secondPerson.male))
  })
  test('SUBJUNCTIVE SINGULAR SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.SINGULAR,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.singular.secondPerson.female))
  })
  test('SUBJUNCTIVE SINGULAR THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.SINGULAR,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.singular.thirdPerson.male))
  })
  test('SUBJUNCTIVE SINGULAR THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.SINGULAR,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.singular.thirdPerson.female))
  })
  test('SUBJUNCTIVE DUAL SECOND', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.DUAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.dual.secondPerson))
  })
  test('SUBJUNCTIVE DUAL THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.DUAL,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.dual.thirdPerson.male))
  })
  test('SUBJUNCTIVE DUAL THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,

        Tense.SUBJUNCTIVE,
        Count.DUAL,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.dual.thirdPerson.female))
  })
  test('SUBJUNCTIVE PLURAL FIRST', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.PLURAL,
        Person.FIRST,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.plural.firstPerson))
  })
  test('SUBJUNCTIVE PLURAL SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.PLURAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.plural.secondPerson.male))
  })
  test('SUBJUNCTIVE PLURAL SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.PLURAL,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.plural.secondPerson.female))
  })
  test('SUBJUNCTIVE PLURAL THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.PLURAL,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.plural.thirdPerson.male))
  })
  test('SUBJUNCTIVE PLURAL THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.SUBJUNCTIVE,
        Count.PLURAL,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.subjunctive.plural.thirdPerson.female))
  })
  test('JUSSIVE SINGULAR FIRST', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.SINGULAR,
        Person.FIRST,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.jussive.singular.firstPerson))
  })
  test('JUSSIVE SINGULAR SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.SINGULAR,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.jussive.singular.secondPerson.male))
  })
  test('JUSSIVE SINGULAR SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.SINGULAR,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.jussive.singular.secondPerson.female))
  })
  test('JUSSIVE SINGULAR THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.SINGULAR,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.jussive.singular.thirdPerson.male))
  })
  test('JUSSIVE SINGULAR THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.SINGULAR,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.jussive.singular.thirdPerson.female))
  })
  test('JUSSIVE DUAL SECOND', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.DUAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.jussive.dual.secondPerson))
  })
  test('JUSSIVE DUAL THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.DUAL,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.jussive.dual.thirdPerson.male))
  })
  test('JUSSIVE DUAL THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.DUAL,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.jussive.dual.thirdPerson.female))
  })
  test('JUSSIVE PLURAL FIRST', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.PLURAL,
        Person.FIRST,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.jussive.plural.firstPerson))
  })
  test('JUSSIVE PLURAL SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.PLURAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.jussive.plural.secondPerson.male))
  })
  test('JUSSIVE PLURAL SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.PLURAL,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.jussive.plural.secondPerson.female))
  })
  test('JUSSIVE PLURAL THIRD MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.PLURAL,
        Person.THIRD,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.jussive.plural.thirdPerson.male))
  })
  test('JUSSIVE PLURAL THIRD FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.JUSSIVE,
        Count.PLURAL,
        Person.THIRD,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.jussive.plural.thirdPerson.female))
  })
  test('IMPERATIVE SINGULAR SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.IMPERATIVE,
        Count.SINGULAR,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.imperative.singular.secondPerson.male))
  })
  test('IMPERATIVE SINGULAR SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.IMPERATIVE,
        Count.SINGULAR,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.imperative.singular.secondPerson.female))
  })

  test('IMPERATIVE DUAL SECOND', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.IMPERATIVE,
        Count.DUAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.imperative.dual.secondPerson))
  })
  test('IMPERATIVE PLURAL SECOND MALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.IMPERATIVE,
        Count.PLURAL,
        Person.SECOND,
        Gender.MALE
      )).toMatch(normalize(conjugatedVerbs.imperative.plural.secondPerson.male))
  })
  test('IMPERATIVE PLURAL SECOND FEMALE', () => {
    expect(
      conjugate(radicals, harakat, options,
        Tense.IMPERATIVE,
        Count.PLURAL,
        Person.SECOND,
        Gender.FEMALE
      )).toMatch(normalize(conjugatedVerbs.imperative.plural.secondPerson.female))
  })
}

function conjugate (
  radicals: Radicals,
  harakat: Harakat,
  options: Options,
  tense: Tense, count: Count, person: Person, gender: Gender) {
  return normalize(VerbConjugator.conjugate(
    radicals,
    harakat,
    options,
    tense,
    count,
    person,
    gender
  ))
}
