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
    second: 'د',
    third: 'د'
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
        firstPerson: 'وَدِدْتُ‎',
        secondPerson: {
          male: 'وَدِدْتَ‎',
          female: 'وَدِدْتِ‎'
        },
        thirdPerson: {
          male: 'وَدَّ',
          female: 'وَدَّتْ‎'
        }
      },
      dual: {
        secondPerson: 'وَدِدْتُمَا‎',
        thirdPerson: {
          male: 'وَدَّا‎',
          female: 'وَدَّتَا‎'
        }
      },
      plural: {
        firstPerson: 'وَدِدْنَا‎',
        secondPerson: {
          male: 'وَدِدْتُمْ‎',
          female: 'وَدِدْتُنَّ‎'
        },
        thirdPerson: {
          male: 'وَدُّوا‎',
          female: 'وَدِدْنَ‎'
        }
      }
    },
    nonPast: {
      singular: {
        firstPerson: 'أَوَدُّ‎',
        secondPerson: {
          male: 'تَوَدُّ‎',
          female: 'تَوَدِّينَ‎'
        },
        thirdPerson: {
          male: 'يَوَدُّ‎',
          female: 'تَوَدُّ‎'
        }
      },
      dual: {
        secondPerson: 'تَوَدَّانِ‎',
        thirdPerson: {
          male: 'يَوَدَّانِ‎',
          female: 'تَوَدَّانِ‎'
        }
      },
      plural: {
        firstPerson: 'نَوَدُّ‎',
        secondPerson: {
          male: 'تَوَدُّونَ‎',
          female: 'تَوْدَدْنَ‎'
        },
        thirdPerson: {
          male: 'يَوَدُّونَ‎',
          female: 'يَوْدَدْنَ‎'
        }
      }
    },
    subjunctive: {
      singular: {
        firstPerson: 'أَوَدَّ‎',
        secondPerson: {
          male: 'تَوَدَّ‎',
          female: 'تَوَدِّي‎'
        },
        thirdPerson: {
          male: 'يَوَدَّ‎',
          female: 'تَوَدَّ‎'
        }
      },
      dual: {
        secondPerson: 'تَوَدَّا‎',
        thirdPerson: {
          male: 'يَوَدَّا‎',
          female: 'تَوَدَّا‎'
        }
      },
      plural: {
        firstPerson: 'نَوَدَّ‎',
        secondPerson: {
          male: 'تَوَدُّوا‎',
          female: 'تَوْدَدْنَ‎'
        },
        thirdPerson: {
          male: 'يَوَدُّوا‎',
          female: 'يَوْدَدْنَ‎'
        }
      }
    },
    jussive: {
      singular: {
        firstPerson: 'أَوَدَّ‎\nأَوَدِّ‎\nأَوْدَدْ‎',
        secondPerson: {
          male: 'تَوَدَّ‎\nتَوَدِّ‎\nتَوْدَدْ‎',
          female: 'تَوَدِّي‎'
        },
        thirdPerson: {
          male: 'يَوَدَّ‎\nيَوَدِّ‎\nيَوْدَدْ‎',
          female: 'تَوَدَّ‎\nتَوَدِّ‎\nتَوْدَدْ‎'
        }
      },
      dual: {
        secondPerson: 'تَوَدَّا‎',
        thirdPerson: {
          male: 'يَوَدَّا‎',
          female: 'تَوَدَّا‎'
        }
      },
      plural: {
        firstPerson: 'نَوَدَّ‎\nنَوَدِّ‎\nنَوْدَدْ‎',
        secondPerson: {
          male: 'تَوَدُّوا‎',
          female: 'تَوْدَدْنَ‎'
        },
        thirdPerson: {
          male: 'يَوَدُّوا‎',
          female: 'يَوْدَدْنَ‎'
        }
      }
    },
    imperative: {
      singular: {
        secondPerson: {
          male: 'وَدَّ\nوَدِّ\nاِيدَدْ‎',
          female: 'وَدِّي‎'
        }
      },
      dual: {
        secondPerson: 'وَدَّا‎'
      },
      plural: {
        secondPerson: {
          male: 'وَدُّوا‎',
          female: 'اِيدَدْنَ‎'
        }
      }
    }
  }
)
