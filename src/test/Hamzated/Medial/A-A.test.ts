import {
  FATHA,
  KASRA
} from '../../../models/VerbConjugator'
import {
  runTest
} from './../../BaseTest'

runTest(
  {
    first: 'ل',
    second: 'ء',
    third: 'م'
  },
  {
    past: FATHA,
    nonPast: FATHA
  },
  { },
  {
    past: {
      singular: {
        firstPerson: 'لَأَمْتُ',
        secondPerson: {
          male: 'لَأَمْتَ',
          female: 'لَأَمْتِ'
        },
        thirdPerson: {
          male: 'لَأَمَ',
          female: 'لَأَمَتْ'
        }
      },
      dual: {
        secondPerson: 'لَأَمْتُمَا',
        thirdPerson: {
          male: 'لَأَمَا',
          female: 'لَأَمَتَا'
        }
      },
      plural: {
        firstPerson: 'لَأَمْنَا',
        secondPerson: {
          male: 'لَأَمْتُمْ',
          female: 'لَأَمْتُنَّ'
        },
        thirdPerson: {
          male: 'لَأَمُوا',
          female: 'لَأَمْنَ'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَلْأَمُ',
        secondPerson: {
          male: 'تَلْأَمُ',
          female: 'تَلْأَمِينَ'
        },
        thirdPerson: {
          male: 'يَلْأَمُ',
          female: 'تَلْأَمُ'
        }
      },
      dual: {
        secondPerson: 'تَلْأَمَانِ',
        thirdPerson: {
          male: 'يَلْأَمَانِ',
          female: 'تَلْأَمَانِ'
        }
      },
      plural: {
        firstPerson: 'نَلْأَمُ',
        secondPerson: {
          male: 'تَلْأَمُونَ',
          female: 'تَلْأَمْنَ'
        },
        thirdPerson: {
          male: 'يَلْأَمُونَ',
          female: 'يَلْأَمْنَ'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَلْأَمَ',
        secondPerson: {
          male: 'تَلْأَمَ',
          female: 'تَلْأَمِي'
        },
        thirdPerson: {
          male: 'يَلْأَمَ',
          female: 'تَلْأَمَ'
        }
      },
      dual: {
        secondPerson: 'تَلْأَمَا',
        thirdPerson: {
          male: 'يَلْأَمَا',
          female: 'تَلْأَمَا'
        }
      },
      plural: {
        firstPerson: 'نَلْأَمَ',
        secondPerson: {
          male: 'تَلْأَمُوا',
          female: 'تَلْأَمْنَ'
        },
        thirdPerson: {
          male: 'يَلْأَمُوا',
          female: 'يَلْأَمْنَ'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَلْأَمْ',
        secondPerson: {
          male: 'تَلْأَمْ',
          female: 'تَلْأَمِي'
        },
        thirdPerson: {
          male: 'يَلْأَمْ',
          female: 'تَلْأَمْ'
        }
      },
      dual: {
        secondPerson: 'تَلْأَمَا',
        thirdPerson: {
          male: 'يَلْأَمَا',
          female: 'تَلْأَمَا'
        }
      },
      plural: {
        firstPerson: 'نَلْأَمْ',
        secondPerson: {
          male: 'تَلْأَمُوا',
          female: 'تَلْأَمْنَ'
        },
        thirdPerson: {
          male: 'يَلْأَمُوا',
          female: 'يَلْأَمْنَ'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'اِلْأَمْ',
          female: 'اِلْأَمِي'
        }
      },
      dual: {
        secondPerson: 'اِلْأَمَا'
      },
      plural: {
        secondPerson: {
          male: 'اِلْأَمُوا',
          female: 'اِلْأَمْنَ'
        }
      }
    }
  }
)
