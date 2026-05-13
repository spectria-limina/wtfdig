import type { FightConfig, PlayerMechStrat, PhaseStrats, Strat, StratRecord } from '$lib/types';
import { getCircleMaskUrl } from '$lib/utils';

function getStringObject(
  stratRecord: Record<string, StratRecord>,
  mechanic: string,
  property: string,
  role?: string
): Record<string, string> {
  let stringObject: Record<string, string> = {};
  for (const [key, strat] of Object.entries(stratRecord)) {
    if (role) {
      // @ts-ignore
      stringObject[key] = (strat[mechanic][role][property] as string) || '';
    } else {
      // @ts-ignore
      stringObject[key] = (strat[mechanic][property] as string) || '';
    }
  }
  return stringObject;
}

const setup: PhaseStrats[] = [
  {
    phaseName: 'Setup',
    tag: 'setup',
    mechs: [
      {
        mechanic: 'General Spots',
        strats: [
          {
            role: 'Tank', party: 1, description: 'SE of boss',
            imageUrl: './umad/general-spots.webp',
            mask: getCircleMaskUrl(66, 66, 18),
          },
          {
            role: 'Tank', party: 2, description: 'SE of boss',
            imageUrl: './umad/general-spots.webp',
            mask: getCircleMaskUrl(66, 66, 18),
          },
          {
            role: 'Healer', party: 1, description: 'SE of boss (make sure Aero is out of heal range)',
            imageUrl: './umad/general-spots.webp',
            mask: getCircleMaskUrl(66, 66, 18),
          },
          {
            role: 'Healer', party: 2, description: 'SE of boss (make sure Aero is out of heal range)',
            imageUrl: './umad/general-spots.webp',
            mask: getCircleMaskUrl(66, 66, 18),
          },
          {
            role: 'Melee', party: 1, description: 'SE of boss',
            imageUrl: './umad/general-spots.webp',
            mask: getCircleMaskUrl(66, 66, 18),
          },
          {
            role: 'Melee', party: 2, description: 'SE of boss',
            imageUrl: './umad/general-spots.webp',
            mask: getCircleMaskUrl(66, 66, 18),
          },

          {
            role: 'Ranged', party: 1, description: 'NW corner out of heal range',
            imageUrl: './umad/general-spots.webp',
            mask: getCircleMaskUrl(26, 19, 7),
          },
          {
            role: 'Ranged', party: 2, description: 'SE of boss',
            imageUrl: './umad/general-spots.webp',
            mask: getCircleMaskUrl(66, 66, 18),
          }
        ]
      }
    ]
  }
];

const spiceBoizStrat: Strat = {
  stratName: 'spiceBoiz',
  description: 'Spice Boiz World Prog strats',
  stratUrl: {},
  notes: '',
  strats: [...setup]
};

export const umadStrats: Strat[] = [spiceBoizStrat];

export const umadFightConfig: FightConfig = {
  fightKey: 'umad',
  title: 'Dancing Mad (Ultimate)',
  abbreviatedTitle: 'UMAD',
  subtitle: 'UMAD Patch 7.51',
  cheatsheetTitle: 'UMAD Cheatsheet',
  strats: {
    spiceBoiz: {
      label: 'SpiceBoiz'
    }
  },
  toggles: [],
  tabTags: {
    'P1: Kefka??': ['setup'],
  },
  useMainPageTabs: true,
  defaultStratName: 'spiceBoiz',
  timeline: [],
  posterEnabled: false,
  roleOptions: [
    { label: 'Abjurae (MT)', role: 'Tank', party: 1, abbrev: 'MT' },
    { label: 'Kyo (OT)', role: 'Tank', party: 2, abbrev: 'OT', },
    { label: 'Yeji (H1)', role: 'Healer', party: 2, abbrev: 'H1' },
    { label: 'Wave (H2)', role: 'Healer', party: 1, abbrev: 'H2' },
    { label: 'Mantique (M1)', role: 'Melee', party: 1, abbrev: 'M1' },
    { label: 'Astra (M2)', role: 'Melee', party: 2, abbrev: 'M2' },
    { label: 'Aero (R1)', role: 'Ranged', party: 1, abbrev: 'R1' },
    { label: 'Scoob (R2)', role: 'Ranged', party: 2, abbrev: 'R2' },
  ]
};
