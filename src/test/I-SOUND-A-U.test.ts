import {
  FATHA,
  DAMMA
} from '../models/VerbConjugator'
import {
  runTest
} from './BaseTest'

runTest(
  {
    first: 'ك',
    second: 'ت',
    third: 'ب'
  },
  {
    past: FATHA,
    nonPast: DAMMA
  },
  {
    assimilateFirstWaw: false
  },
  {
    past: {
      singular: {
        firstPerson: 'كَتَبْتُ‎',
        secondPerson: {
          male: 'كَتَبْتَ‎',
          female: 'كَتَبْتِ‎'
        },
        thirdPerson: {
          male: 'كَتَبَ',
          female: 'كَتَبَتْ‎'
        }
      },
      dual: {
        secondPerson: 'كَتَبْتُمَا‎',
        thirdPerson: {
          male: 'كَتَبَا‎',
          female: 'كَتَبَتَا‎'
        }
      },
      plural: {
        firstPerson: 'كَتَبْنَا‎',
        secondPerson: {
          male: 'كَتَبْتُمْ‎',
          female: 'كَتَبْتُنَّ‎'
        },
        thirdPerson: {
          male: 'كَتَبُوا‎',
          female: 'كَتَبْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَكْتُبُ‎',
        secondPerson: {
          male: 'تَكْتُبُ‎',
          female: 'تَكْتُبِينَ‎'
        },
        thirdPerson: {
          male: 'يَكْتُبُ‎',
          female: 'تَكْتُبُ‎'
        }
      },
      dual: {
        secondPerson: 'تَكْتُبَانِ‎',
        thirdPerson: {
          male: 'يَكْتُبَانِ‎',
          female: 'تَكْتُبَانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَكْتُبُ‎',
        secondPerson: {
          male: 'تَكْتُبُونَ‎',
          female: 'تَكْتُبْنَ‎'
        },
        thirdPerson: {
          male: 'يَكْتُبُونَ‎',
          female: 'يَكْتُبْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَكْتُبَ‎',
        secondPerson: {
          male: 'تَكْتُبَ‎',
          female: 'تَكْتُبِي‎'
        },
        thirdPerson: {
          male: 'يَكْتُبَ‎',
          female: 'تَكْتُبَ‎'
        }
      },
      dual: {
        secondPerson: 'تَكْتُبَا‎',
        thirdPerson: {
          male: 'يَكْتُبَا‎',
          female: 'تَكْتُبَا‎'
        }
      },
      plural: {
        firstPerson: 'نَكْتُبَ‎',
        secondPerson: {
          male: 'تَكْتُبُوا‎',
          female: 'تَكْتُبْنَ‎'
        },
        thirdPerson: {
          male: 'يَكْتُبُوا‎',
          female: 'يَكْتُبْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَكْتُبْ‎',
        secondPerson: {
          male: 'تَكْتُبْ‎',
          female: 'تَكْتُبِي‎'
        },
        thirdPerson: {
          male: 'يَكْتُبْ‎',
          female: 'تَكْتُبْ‎'
        }
      },
      dual: {
        secondPerson: 'تَكْتُبَا‎',
        thirdPerson: {
          male: 'يَكْتُبَا‎',
          female: 'تَكْتُبَا‎'
        }
      },
      plural: {
        firstPerson: 'نَكْتُبْ‎',
        secondPerson: {
          male: 'تَكْتُبُوا‎',
          female: 'تَكْتُبْنَ‎'
        },
        thirdPerson: {
          male: 'يَكْتُبُوا‎',
          female: 'يَكْتُبْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'اُكْتُبْ‎',
          female: 'اُكْتُبِي‎'
        }
      },
      dual: {
        secondPerson: 'اُكْتُبَا‎'
      },
      plural: {
        secondPerson: {
          male: 'اُكْتُبُوا‎',
          female: 'اُكْتُبْنَ‎'
        }
      }
    }
  }
)
