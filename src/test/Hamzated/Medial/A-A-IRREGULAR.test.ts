import {
  FATHA
} from '../../../models/VerbConjugator'
import {
  runTest
} from '../../BaseTest'

runTest(
  {
    first: 'س',
    second: 'ء',
    third: 'ل'
  },
  {
    past: FATHA,
    nonPast: FATHA
  },
  {
    irregularSecondHamzatedFirstForm: true
  },
  {
    past: {
      singular: {
        firstPerson: 'سَأَلْتُ‎',
        secondPerson: {
          male: 'سَأَلْتَ‎',
          female: 'سَأَلْتِ‎'
        },
        thirdPerson: {
          male: 'سَأَلَ',
          female: 'سَأَلَتْ‎'
        }
      },
      dual: {
        secondPerson: 'سَأَلْتُمَا‎',
        thirdPerson: {
          male: 'سَأَلَا‎',
          female: 'سَأَلَتَا‎'
        }
      },
      plural: {
        firstPerson: 'سَأَلْنَا‎',
        secondPerson: {
          male: 'سَأَلْتُمْ‎',
          female: 'سَأَلْتُنَّ‎'
        },
        thirdPerson: {
          male: 'سَأَلُوا‎',
          female: 'سَأَلْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَسْأَلُ‎',
        secondPerson: {
          male: 'تَسْأَلُ‎',
          female: 'تَسْأَلِينَ‎'
        },
        thirdPerson: {
          male: 'يَسْأَلُ‎',
          female: 'تَسْأَلُ‎'
        }
      },
      dual: {
        secondPerson: 'تَسْأَلَانِ‎',
        thirdPerson: {
          male: 'يَسْأَلَانِ‎',
          female: 'تَسْأَلَانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَسْأَلُ‎',
        secondPerson: {
          male: 'تَسْأَلُونَ‎',
          female: 'تَسْأَلْنَ‎'
        },
        thirdPerson: {
          male: 'يَسْأَلُونَ‎',
          female: 'يَسْأَلْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَسْأَلَ‎',
        secondPerson: {
          male: 'تَسْأَلَ‎',
          female: 'تَسْأَلِي‎'
        },
        thirdPerson: {
          male: 'يَسْأَلَ‎',
          female: 'تَسْأَلَ‎'
        }
      },
      dual: {
        secondPerson: 'تَسْأَلَا‎',
        thirdPerson: {
          male: 'يَسْأَلَا‎',
          female: 'تَسْأَلَا‎'
        }
      },
      plural: {
        firstPerson: 'نَسْأَلَ‎',
        secondPerson: {
          male: 'تَسْأَلُوا‎',
          female: 'تَسْأَلْنَ‎'
        },
        thirdPerson: {
          male: 'يَسْأَلُوا‎',
          female: 'يَسْأَلْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَسْأَلْ‎\nأَسَلْ‎',
        secondPerson: {
          male: 'تَسْأَلْ‎\nتَسَلْ‎',
          female: 'تَسْأَلِي‎\nتَسَلِي‎'
        },
        thirdPerson: {
          male: 'يَسْأَلْ‎\nيَسَلْ‎',
          female: 'تَسْأَلْ‎\nتَسَلْ‎'
        }
      },
      dual: {
        secondPerson: 'تَسْأَلَا‎\nتَسَلَا‎',
        thirdPerson: {
          male: 'يَسْأَلَا‎\nيَسَلَا‎',
          female: 'تَسْأَلَا‎\nتَسَلَا‎'
        }
      },
      plural: {
        firstPerson: 'نَسْأَلْ‎\nنَسَلْ‎',
        secondPerson: {
          male: 'تَسْأَلُوا‎\nتَسَلُوا‎',
          female: 'تَسْأَلْنَ‎\nتَسَلْنَ‎'
        },
        thirdPerson: {
          male: 'يَسْأَلُوا‎\nيَسَلُوا‎',
          female: 'يَسْأَلْنَ‎\nيَسَلْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'اِسْأَلْ‎\nسَلْ‎',
          female: 'اِسْأَلِي‎\nسَلِي‎'
        }
      },
      dual: {
        secondPerson: 'اِسْأَلَا‎\nسَلَا‎'
      },
      plural: {
        secondPerson: {
          male: 'اِسْأَلُوا‎\nسَلُوا‎',
          female: 'اِسْأَلْنَ‎\nسَلْنَ‎'
        }
      }
    }
  }
)
