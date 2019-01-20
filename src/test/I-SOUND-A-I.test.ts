import {
  FATHA,
  KASRA
} from '../models/VerbConjugator'
import {
  runTest
} from './BaseTest'

runTest(
  {
    first: 'ع',
    second: 'ر',
    third: 'ف‎‎'
  },
  {
    past: FATHA,
    nonPast: KASRA
  },
  {
    assimilateFirstWaw: false
  },
  {
    past: {
      singular: {
        firstPerson: 'عَرَفْتُ‎',
        secondPerson: {
          male: 'عَرَفْتَ‎',
          female: 'عَرَفْتِ‎'
        },
        thirdPerson: {
          male: 'عَرَفَ',
          female: 'عَرَفَتْ‎'
        }
      },
      dual: {
        secondPerson: 'عَرَفْتُمَا‎',
        thirdPerson: {
          male: 'عَرَفَا‎',
          female: 'عَرَفَتَا‎'
        }
      },
      plural: {
        firstPerson: 'عَرَفْنَا‎',
        secondPerson: {
          male: 'عَرَفْتُمْ‎',
          female: 'عَرَفْتُنَّ‎'
        },
        thirdPerson: {
          male: 'عَرَفُوا‎',
          female: 'عَرَفْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَعْرِفُ‎',
        secondPerson: {
          male: 'تَعْرِفُ‎',
          female: 'تَعْرِفِينَ‎'
        },
        thirdPerson: {
          male: 'يَعْرِفُ‎',
          female: 'تَعْرِفُ‎'
        }
      },
      dual: {
        secondPerson: 'تَعْرِفَانِ‎',
        thirdPerson: {
          male: 'يَعْرِفَانِ‎',
          female: 'تَعْرِفَانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَعْرِفُ‎',
        secondPerson: {
          male: 'تَعْرِفُونَ‎',
          female: 'تَعْرِفْنَ‎'
        },
        thirdPerson: {
          male: 'يَعْرِفُونَ‎',
          female: 'يَعْرِفْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَعْرِفَ‎',
        secondPerson: {
          male: 'تَعْرِفَ‎',
          female: 'تَعْرِفِي‎'
        },
        thirdPerson: {
          male: 'يَعْرِفَ‎',
          female: 'تَعْرِفَ‎'
        }
      },
      dual: {
        secondPerson: 'تَعْرِفَا‎',
        thirdPerson: {
          male: 'يَعْرِفَا‎',
          female: 'تَعْرِفَا‎'
        }
      },
      plural: {
        firstPerson: 'نَعْرِفَ‎',
        secondPerson: {
          male: 'تَعْرِفُوا‎',
          female: 'تَعْرِفْنَ‎'
        },
        thirdPerson: {
          male: 'يَعْرِفُوا‎',
          female: 'يَعْرِفْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَعْرِفْ‎',
        secondPerson: {
          male: 'تَعْرِفْ‎',
          female: 'تَعْرِفِي‎'
        },
        thirdPerson: {
          male: 'يَعْرِفْ‎',
          female: 'تَعْرِفْ‎'
        }
      },
      dual: {
        secondPerson: 'تَعْرِفَا‎',
        thirdPerson: {
          male: 'يَعْرِفَا‎',
          female: 'تَعْرِفَا‎'
        }
      },
      plural: {
        firstPerson: 'نَعْرِفْ‎',
        secondPerson: {
          male: 'تَعْرِفُوا‎',
          female: 'تَعْرِفْنَ‎'
        },
        thirdPerson: {
          male: 'يَعْرِفُوا‎',
          female: 'يَعْرِفْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'اِعْرِفْ‎',
          female: 'اِعْرِفِي‎'
        }
      },
      dual: {
        secondPerson: 'اِعْرِفَا‎'
      },
      plural: {
        secondPerson: {
          male: 'اِعْرِفُوا‎',
          female: 'اِعْرِفْنَ‎'
        }
      }
    }
  }
)
