import {
  FATHA,
  KASRA
} from '../models/VerbConjugator'
import {
  runTest
} from './BaseTest'

runTest(
  {
    first: 'ظ',
    second: 'ل',
    third: 'ل'
  },
  {
    past: KASRA,
    nonPast: FATHA
  },
  {
    assimilateFirstWaw: false
  },
  {
    past:
    {
      singular: {
        firstPerson: 'ظَلِلْتُ‎',
        secondPerson: {
          male: 'ظَلِلْتَ‎',
          female: 'ظَلِلْتِ‎'
        },
        thirdPerson:
        {
          male: 'ظَلَّ',
          female: 'ظَلَّتْ‎'
        }
      },
      dual: {
        secondPerson: 'ظَلِلْتُمَا‎',
        thirdPerson: {
          male: 'ظَلَّا‎',
          female: 'ظَلَّتَا‎'
        }
      },
      plural: {
        firstPerson: 'ظَلِلْنَا‎',
        secondPerson: {
          male: 'ظَلِلْتُمْ‎',
          female: 'ظَلِلْتُنَّ‎'
        },
        thirdPerson: {
          male: 'ظَلُّوا‎',
          female: 'ظَلِلْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَظَلُّ‎',
        secondPerson: {
          male: 'تَظَلُّ‎',
          female: 'تَظَلِّينَ‎'
        },
        thirdPerson: {
          male: 'يَظَلُّ‎',
          female: 'تَظَلُّ‎'
        }
      },
      dual: {
        secondPerson: 'تَظَلَّانِ‎',
        thirdPerson: {
          male: 'يَظَلَّانِ‎',
          female: 'تَظَلَّانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَظَلُّ‎',
        secondPerson: {
          male: 'تَظَلُّونَ‎',
          female: 'تَظْلَلْنَ‎'
        },
        thirdPerson: {
          male: 'يَظَلُّونَ‎',
          female: 'يَظْلَلْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَظَلَّ‎',
        secondPerson: {
          male: 'تَظَلَّ‎',
          female: 'تَظَلِّي‎'
        },
        thirdPerson: {
          male: 'يَظَلَّ‎',
          female: 'تَظَلَّ‎'
        }
      },
      dual: {
        secondPerson: 'تَظَلَّا‎',
        thirdPerson: {
          male: 'يَظَلَّا‎',
          female: 'تَظَلَّا‎'
        }
      },
      plural: {
        firstPerson: 'نَظَلَّ‎',
        secondPerson: {
          male: 'تَظَلُّوا‎',
          female: 'تَظْلَلْنَ‎'
        },
        thirdPerson: {
          male: 'يَظَلُّوا‎',
          female: 'يَظْلَلْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَظَلَّ‎\nأَظَلِّ‎\nأَظْلَلْ‎',
        secondPerson: {
          male: 'تَظَلَّ‎\nتَظَلِّ‎\nتَظْلَلْ‎',
          female: 'تَظَلِّي‎'
        },
        thirdPerson: {
          male: 'يَظَلَّ‎\nيَظَلِّ‎\nيَظْلَلْ‎‎',
          female: 'تَظَلَّ‎\nتَظَلِّ‎\nتَظْلَلْ‎‎'
        }
      },
      dual: {
        secondPerson: 'تَظَلَّا‎',
        thirdPerson: {
          male: 'يَظَلَّا‎',
          female: 'تَظَلَّا‎'
        }
      },
      plural: {
        firstPerson: 'نَظَلَّ‎\nنَظَلِّ‎\nنَظْلَلْ‎‎',
        secondPerson: {
          male: 'تَظَلُّوا‎',
          female: 'تَظْلَلْنَ‎'
        },
        thirdPerson: {
          male: 'يَظَلُّوا‎',
          female: 'يَظْلَلْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'ظَلَّ\nظَلِّ\nاِظْلَلْ‎',
          female: 'ظَلِّي‎'
        }
      },
      dual: {
        secondPerson: 'ظَلَّا‎'
      },
      plural: {
        secondPerson: {
          male: 'ظَلُّوا‎',
          female: 'اِظْلَلْنَ‎'
        }
      }
    }
  })
