import {
  FATHA,
  KASRA
} from '../models/VerbConjugator'
import {
  runTest
} from './BaseTest'

runTest(
  {
    first: 'ف',
    second: 'ت',
    third: 'ح‎‎'
  },
  {
    past: FATHA,
    nonPast: FATHA
  },
  {
    assimilateFirstWaw: false
  },
  {
    past: {
      singular: {
        firstPerson: 'فَتَحْتُ‎',
        secondPerson: {
          male: 'فَتَحْتَ‎',
          female: 'فَتَحْتِ‎'
        },
        thirdPerson: {
          male: 'فَتَحَ',
          female: 'فَتَحَتْ‎'
        }
      },
      dual: {
        secondPerson: 'فَتَحْتُمَا‎',
        thirdPerson: {
          male: 'فَتَحَا‎',
          female: 'فَتَحَتَا‎'
        }
      },
      plural: {
        firstPerson: 'فَتَحْنَا‎',
        secondPerson: {
          male: 'فَتَحْتُمْ‎',
          female: 'فَتَحْتُنَّ‎'
        },
        thirdPerson: {
          male: 'فَتَحُوا‎',
          female: 'فَتَحْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَفْتَحُ‎',
        secondPerson: {
          male: 'تَفْتَحُ‎',
          female: 'تَفْتَحِينَ‎'
        },
        thirdPerson: {
          male: 'يَفْتَحُ‎',
          female: 'تَفْتَحُ‎'
        }
      },
      dual: {
        secondPerson: 'تَفْتَحَانِ‎',
        thirdPerson: {
          male: 'يَفْتَحَانِ‎',
          female: 'تَفْتَحَانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَفْتَحُ‎',
        secondPerson: {
          male: 'تَفْتَحُونَ‎',
          female: 'تَفْتَحْنَ‎'
        },
        thirdPerson: {
          male: 'يَفْتَحُونَ‎',
          female: 'يَفْتَحْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَفْتَحَ‎',
        secondPerson: {
          male: 'تَفْتَحَ‎',
          female: 'تَفْتَحِي‎'
        },
        thirdPerson: {
          male: 'يَفْتَحَ‎',
          female: 'تَفْتَحَ‎'
        }
      },
      dual: {
        secondPerson: 'تَفْتَحَا‎',
        thirdPerson: {
          male: 'يَفْتَحَا‎',
          female: 'تَفْتَحَا‎'
        }
      },
      plural: {
        firstPerson: 'نَفْتَحَ‎',
        secondPerson: {
          male: 'تَفْتَحُوا‎',
          female: 'تَفْتَحْنَ‎'
        },
        thirdPerson: {
          male: 'يَفْتَحُوا‎',
          female: 'يَفْتَحْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَفْتَحْ‎',
        secondPerson: {
          male: 'تَفْتَحْ‎',
          female: 'تَفْتَحِي‎'
        },
        thirdPerson: {
          male: 'يَفْتَحْ‎',
          female: 'تَفْتَحْ‎'
        }
      },
      dual: {
        secondPerson: 'تَفْتَحَا‎',
        thirdPerson: {
          male: 'يَفْتَحَا‎',
          female: 'تَفْتَحَا‎'
        }
      },
      plural: {
        firstPerson: 'نَفْتَحْ‎',
        secondPerson: {
          male: 'تَفْتَحُوا‎',
          female: 'تَفْتَحْنَ‎'
        },
        thirdPerson: {
          male: 'يَفْتَحُوا‎',
          female: 'يَفْتَحْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'اِفْتَحْ‎',
          female: 'اِفْتَحِي‎'
        }
      },
      dual: {
        secondPerson: 'اِفْتَحَا‎'
      },
      plural: {
        secondPerson: {
          male: 'اِفْتَحُوا‎',
          female: 'اِفْتَحْنَ‎'
        }
      }
    }
  }
)
