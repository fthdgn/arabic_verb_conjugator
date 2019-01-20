import {
  FATHA,
  DAMMA
} from '../models/VerbConjugator'
import {
  runTest
} from './BaseTest'

runTest(
  {
    first: 'م',
    second: 'ر',
    third: 'ر'
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
        firstPerson: 'مَرَرْتُ‎',
        secondPerson: {
          male: 'مَرَرْتَ‎',
          female: 'مَرَرْتِ‎'
        },
        thirdPerson: {
          male: 'مَرَّ',
          female: 'مَرَّتْ‎'
        }
      },
      dual: {
        secondPerson: 'مَرَرْتُمَا‎',
        thirdPerson: {
          male: 'مَرَّا‎',
          female: 'مَرَّتَا‎'
        }
      },
      plural: {
        firstPerson: 'مَرَرْنَا‎',
        secondPerson: {
          male: 'مَرَرْتُمْ‎',
          female: 'مَرَرْتُنَّ‎'
        },
        thirdPerson: {
          male: 'مَرُّوا‎',
          female: 'مَرَرْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَمُرُّ‎',
        secondPerson: {
          male: 'تَمُرُّ‎',
          female: 'تَمُرِّينَ‎'
        },
        thirdPerson: {
          male: 'يَمُرُّ‎',
          female: 'تَمُرُّ‎'
        }
      },
      dual: {
        secondPerson: 'تَمُرَّانِ‎',
        thirdPerson: {
          male: 'يَمُرَّانِ‎',
          female: 'تَمُرَّانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَمُرُّ‎',
        secondPerson: {
          male: 'تَمُرُّونَ‎',
          female: 'تَمْرُرْنَ‎'
        },
        thirdPerson: {
          male: 'يَمُرُّونَ‎',
          female: 'يَمْرُرْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَمُرَّ‎',
        secondPerson: {
          male: 'تَمُرَّ‎',
          female: 'تَمُرِّي‎'
        },
        thirdPerson: {
          male: 'يَمُرَّ‎',
          female: 'تَمُرَّ‎'
        }
      },
      dual: {
        secondPerson: 'تَمُرَّا‎',
        thirdPerson: {
          male: 'يَمُرَّا‎',
          female: 'تَمُرَّا‎'
        }
      },
      plural: {
        firstPerson: 'نَمُرَّ‎',
        secondPerson: {
          male: 'تَمُرُّوا‎',
          female: 'تَمْرُرْنَ‎'
        },
        thirdPerson: {
          male: 'يَمُرُّوا‎',
          female: 'يَمْرُرْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَمُرَّ‎\nأَمُرِّ\nأَمْرُرْ‎',
        secondPerson: {
          male: 'تَمُرَّ‎\nتَمُرِّ‎\nتَمْرُرْ‎',
          female: 'تَمُرِّي‎'
        },
        thirdPerson: {
          male: 'يَمُرَّ‎\nيَمُرِّ‎\nيَمْرُرْ‎',
          female: 'تَمُرَّ‎\nتَمُرِّ‎\nتَمْرُرْ‎'
        }
      },
      dual: {
        secondPerson: 'تَمُرَّا‎',
        thirdPerson: {
          male: 'يَمُرَّا‎',
          female: 'تَمُرَّا‎'
        }
      },
      plural: {
        firstPerson: 'نَمُرَّ‎\nنَمُرِّ‎\nنَمْرُرْ‎',
        secondPerson: {
          male: 'تَمُرُّوا‎',
          female: 'تَمْرُرْنَ‎'
        },
        thirdPerson: {
          male: 'يَمُرُّوا‎',
          female: 'يَمْرُرْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'مُرَّ\nمُرِّ\nاُمْرُرْ‎',
          female: 'مُرِّي‎'
        }
      },
      dual: {
        secondPerson: 'مُرَّا‎'
      },
      plural: {
        secondPerson: {
          male: 'مُرُّوا‎',
          female: 'اُمْرُرْنَ‎'
        }
      }
    }
  }
)
