<template>
  <div>
    <select v-model="thirdRadical">
      <option
        v-for="letter in letters"
        :key="letter">{{ letter }}</option>
    </select>

    <select v-model="secondRadical">
      <option
        v-for="letter in letters"
        :key="letter">{{ letter }}</option>
    </select>

    <select v-model="firstRadical">
      <option
        v-for="letter in letters"
        :key="letter">{{ letter }}</option>
    </select>

    <br>
    <select v-model="selectedVowel">
      <option
        v-for="vowel in vowels"
        :key="vowel">{{ vowel }}</option>
    </select>

    <br>
    <div v-if="isFirstRadicalWaw()">
      <input
        v-model="wawAsimilated"
        type="checkbox">
      <label>Waw asimilated</label>
    </div>

    <form v-if="isFirstRadicalHamza()">
      <input
        v-model="shortenedImperative"
        type="checkbox">
      <label>Shortened imperative</label>
    </form>
    <br>

    <form v-if="isSecondRadicalHamza()">
      <input
        v-model="irregularSecondHamzatedFirstForm"
        type="checkbox">
      <label>Irregular middle hamza</label>
    </form>
    <br>

    <table>
      <tr>
        <th colspan="2"/>
        <th colspan="3">singular</th>
        <th colspan="2">dual</th>
        <th colspan="3">plural</th>
      </tr>
      <tr>
        <th colspan="2"/>
        <th>1st person</th>
        <th>2nd person</th>
        <th>3rd person</th>
        <th>2nd person</th>
        <th>3rd person</th>
        <th>1st person</th>
        <th>2nd person</th>
        <th>3rd person</th>
      </tr>

      <tr>
        <th rowspan="2">past (perfect) indicative</th>
        <th>m</th>
        <td rowspan="2">{{ getSingularFirstPersonPast() }}</td>
        <td>{{ getSingularSecondPersonMalePast() }}</td>
        <td>{{ getSingularThirdPersonMalePast() }}</td>
        <td rowspan="2">{{ getDualSecondPersonPast() }}</td>
        <td>{{ getDualThirdPersonMalePast() }}</td>
        <td rowspan="2">{{ getPluralFirstPersonPast() }}</td>
        <td>{{ getPluralSecondPersonMalePast() }}</td>
        <td>{{ getPluralThirdPersonMalePast() }}</td>
      </tr>
      <tr>
        <th>f</th>
        <td>{{ getSingularSecondPersonFemalePast() }}</td>
        <td>{{ getSingularThirdPersonFemalePast() }}</td>
        <td>{{ getDualThirdPersonFemalePast() }}</td>
        <td>{{ getPluralSecondPersonFemalePast() }}</td>
        <td>{{ getPluralThirdPersonFemalePast() }}</td>
      </tr>

      <tr>
        <th rowspan="2">non-past (imperfect) indicative</th>
        <th>m</th>
        <td rowspan="2">{{ getSingularFirstPersonNonPast() }}</td>
        <td>{{ getSingularSecondPersonMaleNonPast() }}</td>
        <td>{{ getSingularThirdPersonMaleNonPast() }}</td>
        <td rowspan="2">{{ getDualSecondPersonNonPast() }}</td>
        <td>{{ getDualThirdPersonMaleNonPast() }}</td>
        <td rowspan="2">{{ getPluralFirstPersonNonPast() }}</td>
        <td>{{ getPluralSecondPersonMaleNonPast() }}</td>
        <td>{{ getPluralThirdPersonMaleNonPast() }}</td>
      </tr>
      <tr>
        <th>f</th>
        <td>{{ getSingularSecondPersonFemaleNonPast() }}</td>
        <td>{{ getSingularThirdPersonFemaleNonPast() }}</td>
        <td>{{ getDualThirdPersonFemaleNonPast() }}</td>
        <td>{{ getPluralSecondPersonFemaleNonPast() }}</td>
        <td>{{ getPluralThirdPersonFemaleNonPast() }}</td>
      </tr>

      <tr>
        <th rowspan="2">subjunctive</th>
        <th>m</th>
        <td rowspan="2">{{ getSingularFirstPersonSubjunctive() }}</td>
        <td>{{ getSingularSecondPersonMaleSubjunctive() }}</td>
        <td>{{ getSingularThirdPersonMaleSubjunctive() }}</td>
        <td rowspan="2">{{ getDualSecondPersonSubjunctive() }}</td>
        <td>{{ getDualThirdPersonMaleSubjunctive() }}</td>
        <td rowspan="2">{{ getPluralFirstPersonSubjunctive() }}</td>
        <td>{{ getPluralSecondPersonMaleSubjunctive() }}</td>
        <td>{{ getPluralThirdPersonMaleSubjunctive() }}</td>
      </tr>
      <tr>
        <th>f</th>
        <td>{{ getSingularSecondPersonFemaleSubjunctive() }}</td>
        <td>{{ getSingularThirdPersonFemaleSubjunctive() }}</td>
        <td>{{ getDualThirdPersonFemaleSubjunctive() }}</td>
        <td>{{ getPluralSecondPersonFemaleSubjunctive() }}</td>
        <td>{{ getPluralThirdPersonFemaleSubjunctive() }}</td>
      </tr>

      <tr>
        <th rowspan="2">jussive</th>
        <th>m</th>
        <td rowspan="2">{{ getSingularFirstPersonJussive() }}</td>
        <td>{{ getSingularSecondPersonMaleJussive() }}</td>
        <td>{{ getSingularThirdPersonMaleJussive() }}</td>
        <td rowspan="2">{{ getDualSecondPersonJussive() }}</td>
        <td>{{ getDualThirdPersonMaleJussive() }}</td>
        <td rowspan="2">{{ getPluralFirstPersonJussive() }}</td>
        <td>{{ getPluralSecondPersonMaleJussive() }}</td>
        <td>{{ getPluralThirdPersonMaleJussive() }}</td>
      </tr>
      <tr>
        <th>f</th>
        <td>{{ getSingularSecondPersonFemaleJussive() }}</td>
        <td>{{ getSingularThirdPersonFemaleJussive() }}</td>
        <td>{{ getDualThirdPersonFemaleJussive() }}</td>
        <td>{{ getPluralSecondPersonFemaleJussive() }}</td>
        <td>{{ getPluralThirdPersonFemaleJussive() }}</td>
      </tr>

      <tr>
        <th rowspan="2">imperative</th>
        <th>m</th>
        <td rowspan="2"/>
        <td>{{ getSingularSecondPersonMaleImperative() }}</td>
        <td rowspan="2"/>
        <td rowspan="2">{{ getDualSecondPersonImperative() }}</td>
        <td rowspan="2"/>
        <td rowspan="2"/>
        <td>{{ getPluralSecondPersonMaleImperative() }}</td>
        <td rowspan="2"/>
      </tr>
      <tr>
        <th>f</th>
        <td>{{ getSingularSecondPersonFemaleImperative() }}</td>
        <td>{{ getPluralSecondPersonFemaleImperative() }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import {
  VerbConjugator,
  Tense,
  Person,
  Count,
  Gender,
  FATHA,
  KASRA,
  DAMMA
} from '@/models/VerbConjugator'

import { remote } from 'electron'
import { relative, resolve } from 'path'
import { get } from 'http'

@Component
export default class ArabicVerb extends Vue {
  private letters = [
    'ء',
    'ب',
    'ت',
    'ث',
    'ج',
    'ح',
    'خ',
    'د',
    'ذ',
    'ر',
    'ز',
    'س',
    'ش',
    'ص',
    'ض',
    'ط',
    'ظ',
    'ع',
    'غ',
    'ف',
    'ق',
    'ك',
    'ل',
    'م',
    'ن',
    'ه',
    'و',
    'ي',
    'ى'
  ];

  private selectedVowel: string = 'i-a';
  private firstRadical: string = 'ي';
  private secondRadical: string = 'ق';
  private thirdRadical: string = 'ظ';
  private wawAsimilated: boolean = true;
  private shortenedImperative: boolean = false;
  private irregularSecondHamzatedFirstForm: boolean = false;

  private vowels = ['a-a', 'a-i', 'a-u', 'i-a', 'i-i', 'u-u'];

  private isFirstRadicalWaw () {
    return this.firstRadical === '\u0648'
  }

  private isFirstRadicalHamza () {
    return this.firstRadical === '\u0621'
  }

  private isSecondRadicalHamza () {
    return this.secondRadical === '\u0621'
  }

  private getPastHaraka (): string {
    switch (this.selectedVowel.charAt(0)) {
      case 'a':
        return FATHA
      case 'i':
        return KASRA
      case 'u':
        return DAMMA
      default:
        return ''
    }
  }

  private getNonPastHaraka (): string {
    switch (this.selectedVowel.charAt(2)) {
      case 'a':
        return FATHA
      case 'i':
        return KASRA
      case 'u':
        return DAMMA
      default:
        return ''
    }
  }

  private transform (
    tense: Tense,
    count: Count,
    person: Person,
    gender: Gender
  ): string {
    return VerbConjugator.conjugate(
      {
        first: this.firstRadical,
        second: this.secondRadical,
        third: this.thirdRadical
      },
      {
        past: this.getPastHaraka(),
        nonPast: this.getNonPastHaraka()
      },
      {
        assimilateFirstWaw: this.wawAsimilated,
        shortenImperative: this.shortenedImperative,
        irregularSecondHamzatedFirstForm: this.irregularSecondHamzatedFirstForm
      },
      tense,
      count,
      person,
      gender
    )
  }

  private getSingularFirstPersonPast (): string {
    return this.transform(
      Tense.PAST,
      Count.SINGULAR,
      Person.FIRST,
      Gender.MALE
    )
  }

  private getSingularSecondPersonMalePast (): string {
    return this.transform(
      Tense.PAST,
      Count.SINGULAR,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getSingularSecondPersonFemalePast (): string {
    return this.transform(
      Tense.PAST,
      Count.SINGULAR,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getSingularThirdPersonMalePast (): string {
    return this.transform(
      Tense.PAST,
      Count.SINGULAR,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getSingularThirdPersonFemalePast (): string {
    return this.transform(
      Tense.PAST,
      Count.SINGULAR,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getDualSecondPersonPast (): string {
    return this.transform(Tense.PAST, Count.DUAL, Person.SECOND, Gender.MALE)
  }

  private getDualThirdPersonMalePast (): string {
    return this.transform(Tense.PAST, Count.DUAL, Person.THIRD, Gender.MALE)
  }

  private getDualThirdPersonFemalePast (): string {
    return this.transform(Tense.PAST, Count.DUAL, Person.THIRD, Gender.FEMALE)
  }

  private getPluralFirstPersonPast (): string {
    return this.transform(Tense.PAST, Count.PLURAL, Person.FIRST, Gender.MALE)
  }

  private getPluralSecondPersonMalePast (): string {
    return this.transform(Tense.PAST, Count.PLURAL, Person.SECOND, Gender.MALE)
  }

  private getPluralSecondPersonFemalePast (): string {
    return this.transform(
      Tense.PAST,
      Count.PLURAL,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getPluralThirdPersonMalePast (): string {
    return this.transform(Tense.PAST, Count.PLURAL, Person.THIRD, Gender.MALE)
  }

  private getPluralThirdPersonFemalePast (): string {
    return this.transform(
      Tense.PAST,
      Count.PLURAL,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getSingularFirstPersonNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.SINGULAR,
      Person.FIRST,
      Gender.MALE
    )
  }

  private getSingularSecondPersonMaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.SINGULAR,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getSingularSecondPersonFemaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.SINGULAR,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getSingularThirdPersonMaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.SINGULAR,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getSingularThirdPersonFemaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.SINGULAR,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getDualSecondPersonNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.DUAL,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getDualThirdPersonMaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.DUAL,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getDualThirdPersonFemaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.DUAL,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getPluralFirstPersonNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.PLURAL,
      Person.FIRST,
      Gender.MALE
    )
  }

  private getPluralSecondPersonMaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.PLURAL,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getPluralSecondPersonFemaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.PLURAL,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getPluralThirdPersonMaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.PLURAL,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getPluralThirdPersonFemaleNonPast (): string {
    return this.transform(
      Tense.NON_PAST,
      Count.PLURAL,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getSingularFirstPersonSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.SINGULAR,
      Person.FIRST,
      Gender.MALE
    )
  }

  private getSingularSecondPersonMaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.SINGULAR,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getSingularSecondPersonFemaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.SINGULAR,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getSingularThirdPersonMaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.SINGULAR,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getSingularThirdPersonFemaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.SINGULAR,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getDualSecondPersonSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.DUAL,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getDualThirdPersonMaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.DUAL,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getDualThirdPersonFemaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.DUAL,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getPluralFirstPersonSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.PLURAL,
      Person.FIRST,
      Gender.MALE
    )
  }

  private getPluralSecondPersonMaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.PLURAL,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getPluralSecondPersonFemaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.PLURAL,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getPluralThirdPersonMaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.PLURAL,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getPluralThirdPersonFemaleSubjunctive (): string {
    return this.transform(
      Tense.SUBJUNCTIVE,
      Count.PLURAL,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getSingularFirstPersonJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.SINGULAR,
      Person.FIRST,
      Gender.MALE
    )
  }

  private getSingularSecondPersonMaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.SINGULAR,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getSingularSecondPersonFemaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.SINGULAR,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getSingularThirdPersonMaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.SINGULAR,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getSingularThirdPersonFemaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.SINGULAR,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getDualSecondPersonJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.DUAL,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getDualThirdPersonMaleJussive (): string {
    return this.transform(Tense.JUSSIVE, Count.DUAL, Person.THIRD, Gender.MALE)
  }

  private getDualThirdPersonFemaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.DUAL,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getPluralFirstPersonJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.PLURAL,
      Person.FIRST,
      Gender.MALE
    )
  }

  private getPluralSecondPersonMaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.PLURAL,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getPluralSecondPersonFemaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.PLURAL,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getPluralThirdPersonMaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.PLURAL,
      Person.THIRD,
      Gender.MALE
    )
  }

  private getPluralThirdPersonFemaleJussive (): string {
    return this.transform(
      Tense.JUSSIVE,
      Count.PLURAL,
      Person.THIRD,
      Gender.FEMALE
    )
  }

  private getSingularSecondPersonMaleImperative (): string {
    return this.transform(
      Tense.IMPERATIVE,
      Count.SINGULAR,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getSingularSecondPersonFemaleImperative (): string {
    return this.transform(
      Tense.IMPERATIVE,
      Count.SINGULAR,
      Person.SECOND,
      Gender.FEMALE
    )
  }

  private getDualSecondPersonImperative (): string {
    return this.transform(
      Tense.IMPERATIVE,
      Count.DUAL,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getPluralSecondPersonMaleImperative (): string {
    return this.transform(
      Tense.IMPERATIVE,
      Count.PLURAL,
      Person.SECOND,
      Gender.MALE
    )
  }

  private getPluralSecondPersonFemaleImperative (): string {
    return this.transform(
      Tense.IMPERATIVE,
      Count.PLURAL,
      Person.SECOND,
      Gender.FEMALE
    )
  }
}
</script>

<style scoped>
table {
  width: 100% !important;
  margin: auto;
  border-collapse: collapse;
  border-spacing: 2px;
  margin: auto;
}

select {
  font-size: 150%;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr.sum {
  background-color: #c9ddff;
}

th {
  font-size: 100%;
  font-family: Verdana, sans-serif;
  font-size: 11pt;
  background-color: LightBlue;
  border: 1px solid black;
}

td {
  font-size: 200%;
  text-align: right;
  padding: 8px;
  background-color: LightYellow;
  border: 1px solid black;
  white-space: pre;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
