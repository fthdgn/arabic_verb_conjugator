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
    second: 'س',
    third: 'ع'
  },
  {
    past: KASRA,
    nonPast: FATHA
  },
  {
    assimilateFirstWaw: true
  },
  {
    past: {
      singular: {
        firstPerson: 'وَسِعْتُ‎',
        secondPerson: {
          male: 'وَسِعْتَ‎',
          female: 'وَسِعْتِ‎'
        },
        thirdPerson: {
          male: 'وَسِعَ',
          female: 'وَسِعَتْ'
        }
      },
      dual: {
        secondPerson: 'وَسِعْتُمَا‎',
        thirdPerson: {
          male: 'وَسِعَا‎',
          female: 'وَسِعَتَا‎'
        }
      },
      plural: {
        firstPerson: 'وَسِعْنَا‎',
        secondPerson: {
          male: 'وَسِعْتُمْ‎',
          female: 'وَسِعْتُنَّ‎'
        },
        thirdPerson: {
          male: 'وَسِعُوا‎',
          female: 'وَسِعْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَسَعُ‎',
        secondPerson: {
          male: 'تَسَعُ‎',
          female: 'تَسَعِينَ‎'
        },
        thirdPerson: {
          male: 'يَسَعُ‎',
          female: 'تَسَعُ‎'
        }
      },
      dual: {
        secondPerson: 'تَسَعَانِ‎',
        thirdPerson: {
          male: 'يَسَعَانِ‎',
          female: 'تَسَعَانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَسَعُ‎',
        secondPerson: {
          male: 'تَسَعُونَ‎',
          female: 'تَسَعْنَ‎'
        },
        thirdPerson: {
          male: 'يَسَعُونَ‎',
          female: 'يَسَعْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَسَعَ‎',
        secondPerson: {
          male: 'تَسَعَ‎',
          female: 'تَسَعِي‎'
        },
        thirdPerson: {
          male: 'يَسَعَ‎',
          female: 'تَسَعَ‎'
        }
      },
      dual: {
        secondPerson: 'تَسَعَا‎',
        thirdPerson: {
          male: 'يَسَعَا‎',
          female: 'تَسَعَا‎'
        }
      },
      plural: {
        firstPerson: 'نَسَعَ‎',
        secondPerson: {
          male: 'تَسَعُوا‎',
          female: 'تَسَعْنَ‎'
        },
        thirdPerson: {
          male: 'يَسَعُوا‎',
          female: 'يَسَعْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَسَعْ‎‎',
        secondPerson: {
          male: 'تَسَعْ‎',
          female: 'تَسَعِي‎'
        },
        thirdPerson: {
          male: 'يَسَعْ‎‎',
          female: 'تَسَعْ‎'
        }
      },
      dual: {
        secondPerson: 'تَسَعَا‎',
        thirdPerson: {
          male: 'يَسَعَا‎',
          female: 'تَسَعَا‎'
        }
      },
      plural: {
        firstPerson: 'نَسَعْ‎',
        secondPerson: {
          male: 'تَسَعُوا‎',
          female: 'تَسَعْنَ‎'
        },
        thirdPerson: {
          male: 'يَسَعُوا‎',
          female: 'يَسَعْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'سَعْ‎',
          female: 'سَعِي‎'
        }
      },
      dual: {
        secondPerson: 'سَعَا‎'
      },
      plural: {
        secondPerson: {
          male: 'سَعُوا‎',
          female: 'سَعْنَ‎'
        }
      }
    }
  }
)
