import {
  FATHA,
  KASRA
} from '../models/VerbConjugator'
import {
  runTest
} from './BaseTest'

runTest(
  {
    first: 'و',
    second: 'ج',
    third: 'ع'
  },
  {
    past: KASRA,
    nonPast: FATHA
  },
  {
    assimilateFirstWaw: false
  },
  {
    past: {
      singular: {
        firstPerson: 'وَجِعْتُ‎',
        secondPerson: {
          male: 'وَجِعْتَ‎',
          female: 'وَجِعْتِ‎'
        },
        thirdPerson: {
          male: 'وَجِعَ',
          female: 'وَجِعَتْ‎'
        }
      },
      dual: {
        secondPerson: 'وَجِعْتُمَا‎',
        thirdPerson: {
          male: 'وَجِعَا‎',
          female: 'وَجِعَتَا‎'
        }
      },
      plural: {
        firstPerson: 'وَجِعْنَا‎',
        secondPerson: {
          male: 'وَجِعْتُمْ‎',
          female: 'وَجِعْتُنَّ‎'
        },
        thirdPerson: {
          male: 'وَجِعُوا‎',
          female: 'وَجِعْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَوْجَعُ‎',
        secondPerson: {
          male: 'تَوْجَعُ‎',
          female: 'تَوْجَعِينَ‎'
        },
        thirdPerson: {
          male: 'يَوْجَعُ‎',
          female: 'تَوْجَعُ‎'
        }
      },
      dual: {
        secondPerson: 'تَوْجَعَانِ‎',
        thirdPerson: {
          male: 'يَوْجَعَانِ‎',
          female: 'تَوْجَعَانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَوْجَعُ‎',
        secondPerson: {
          male: 'تَوْجَعُونَ‎',
          female: 'تَوْجَعْنَ‎'
        },
        thirdPerson: {
          male: 'يَوْجَعُونَ‎',
          female: 'يَوْجَعْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَوْجَعَ‎',
        secondPerson: {
          male: 'تَوْجَعَ‎',
          female: 'تَوْجَعِي‎'
        },
        thirdPerson: {
          male: 'يَوْجَعَ‎',
          female: 'تَوْجَعَ‎'
        }
      },
      dual: {
        secondPerson: 'تَوْجَعَا‎',
        thirdPerson: {
          male: 'يَوْجَعَا‎',
          female: 'تَوْجَعَا‎'
        }
      },
      plural: {
        firstPerson: 'نَوْجَعَ‎',
        secondPerson: {
          male: 'تَوْجَعُوا‎',
          female: 'تَوْجَعْنَ‎'
        },
        thirdPerson: {
          male: 'يَوْجَعُوا‎',
          female: 'يَوْجَعْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَوْجَعْ‎',
        secondPerson: {
          male: 'تَوْجَعْ‎',
          female: 'تَوْجَعِي‎'
        },
        thirdPerson: {
          male: 'يَوْجَعْ‎',
          female: 'تَوْجَعْ‎‎'
        }
      },
      dual: {
        secondPerson: 'تَوْجَعَا‎',
        thirdPerson: {
          male: 'يَوْجَعَا‎',
          female: 'تَوْجَعَا‎'
        }
      },
      plural: {
        firstPerson: 'نَوْجَعْ‎',
        secondPerson: {
          male: 'تَوْجَعُوا‎',
          female: 'تَوْجَعْنَ‎'
        },
        thirdPerson: {
          male: 'يَوْجَعُوا‎',
          female: 'يَوْجَعْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'اِيجَعْ‎',
          female: 'اِيجَعِي‎'
        }
      },
      dual: {
        secondPerson: 'اِيجَعَا‎'
      },
      plural: {
        secondPerson: {
          male: 'اِيجَعُوا‎',
          female: 'اِيجَعْنَ‎'
        }
      }
    }
  }
)
