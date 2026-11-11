export const W=1100,H=720;
export const LEVELS=[
 {name:'The Mosswood',subtitle:'Where the old magic wakes',color:'#608448',boss:'Bramble King',paths:[[[0,190],[260,190],[260,440],[580,440],[580,250],[870,250],[870,560],[1100,560]]],pads:[[150,250],[320,290],[200,446],[400,500],[490,380],[640,350],[760,190],[940,350],[810,550],[980,600]]},
 {name:'Amber Crossing',subtitle:'Two roads. One last stand.',color:'#8a8146',boss:'Amber Colossus',paths:[[[0,150],[300,150],[480,360],[760,360],[900,550],[1100,550]],[[0,570],[300,570],[480,360],[760,360],[900,550],[1100,550]]],pads:[[180,210],[180,510],[372,330],[448,240],[448,480],[620,300],[650,430],[804,294],[980,450],[920,610]]},
 {name:'Moonfen Marsh',subtitle:'Something stirs beneath the mist',color:'#416d69',boss:'The Mire Wyrm',paths:[[[0,120],[900,120],[900,340],[210,340],[210,580],[1100,580]]],pads:[[150,190],[370,200],[600,195],[830,230],[960,230],[290,450],[550,420],[790,430],[150,460],[960,630]]},
 {name:'Ember Hollow',subtitle:'Hold the line against the cinders',color:'#80604c',boss:'Ignis, Rekindled',paths:[[[0,210],[260,210],[400,110],[700,110],[820,300],[620,480],[850,610],[1100,610]],[[0,520],[260,520],[400,380],[620,480],[850,610],[1100,610]]],pads:[[160,280],[160,590],[332,226],[500,180],[736,244],[892,322],[462,472],[614,574],[786,496],[1000,550]]},
 {name:'The Crystal Crown',subtitle:'The realm’s final refuge',color:'#586b83',boss:'Terrax, Worldbreaker',paths:[[[0,160],[260,160],[260,360],[520,360],[520,160],[800,160],[800,540],[1100,540]],[[0,580],[260,580],[260,360],[520,360],[520,570],[800,570],[800,540],[1100,540]]],pads:[[150,230],[150,500],[340,220],[350,490],[580,270],[650,495],[710,110],[870,270],[920,470],[990,600]]}
];
export const TOWERS={
  "wizard": {
    "name": "Red Wizard",
    "role": "Magic bolts",
    "cost": 110,
    "color": "#e45b55",
    "damage": 22,
    "range": 170,
    "rate": 0.9,
    "branches": [
      {
        "name": "Star staff",
        "description": "Every fourth cast releases an amplified comet.",
        "skills": [
          {
            "name": "Runed wand",
            "cost": 75,
            "effect": {
              "damage": 19
            },
            "flavor": "Carves a rune that concentrates each magic bolt."
          },
          {
            "name": "Crystal focus",
            "cost": 140,
            "effect": {
              "damage": 24,
              "range": 15
            },
            "flavor": "Sets a crystal into the wand for heavier, longer-reaching spells."
          },
          {
            "name": "Comet core",
            "cost": 240,
            "effect": {
              "damage": 29,
              "splash": 18,
              "overload": 0.2
            },
            "flavor": "Every fourth cast releases an amplified comet."
          },
          {
            "name": "Meteor staff",
            "cost": 380,
            "effect": {
              "damage": 34,
              "splash": 12
            },
            "flavor": "Binds a meteor fragment to enlarge the comet impact."
          },
          {
            "name": "Astral Archmage",
            "cost": 560,
            "effect": {
              "damage": 45,
              "splash": 20,
              "overload": 0.3
            },
            "flavor": "Transforms into Astral Archmage. Every fourth cast releases an amplified comet."
          }
        ],
        "finalForm": "Astral Archmage"
      },
      {
        "name": "Thunder staff",
        "description": "Lightning retains more power as it jumps.",
        "skills": [
          {
            "name": "Copper coil",
            "cost": 75,
            "effect": {
              "damage": 4,
              "chain": 1
            },
            "flavor": "Wraps the wand in copper so lightning can jump once."
          },
          {
            "name": "Forked conductor",
            "cost": 140,
            "effect": {
              "damage": 6,
              "chain": 1
            },
            "flavor": "Adds a forked conductor to reach another enemy."
          },
          {
            "name": "Storm crystal",
            "cost": 240,
            "effect": {
              "damage": 8,
              "chain": 1,
              "range": 12,
              "chainPower": 0.08
            },
            "flavor": "Lightning retains more power as it jumps."
          },
          {
            "name": "Lightning rod",
            "cost": 380,
            "effect": {
              "damage": 10,
              "chain": 1
            },
            "flavor": "Extends the lightning rod to carry one more arc."
          },
          {
            "name": "Tempest Oracle",
            "cost": 560,
            "effect": {
              "damage": 14,
              "chain": 2,
              "chainPower": 0.12
            },
            "flavor": "Transforms into Tempest Oracle. Lightning retains more power as it jumps."
          }
        ],
        "finalForm": "Tempest Oracle"
      },
      {
        "name": "Ice staff",
        "description": "Every fourth cast freezes enemies briefly.",
        "skills": [
          {
            "name": "Frost gem",
            "cost": 75,
            "effect": {
              "damage": 6,
              "slow": 0.1
            },
            "flavor": "Fits a frost gem that chills the target on impact."
          },
          {
            "name": "Icicle wand",
            "cost": 140,
            "effect": {
              "damage": 8,
              "slow": 0.12,
              "slowTime": 0.6
            },
            "flavor": "Grows an icicle tip to deepen and extend the chill."
          },
          {
            "name": "Snowflake focus",
            "cost": 240,
            "effect": {
              "damage": 10,
              "slow": 0.13,
              "freeze": 0.35
            },
            "flavor": "Every fourth cast freezes enemies briefly."
          },
          {
            "name": "Blizzard staff",
            "cost": 380,
            "effect": {
              "damage": 12,
              "slow": 0.15,
              "slowTime": 1
            },
            "flavor": "Weaves a blizzard into the staff for a stronger, longer chill."
          },
          {
            "name": "Winter Sovereign",
            "cost": 560,
            "effect": {
              "damage": 16,
              "slow": 0.2,
              "splash": 30,
              "freeze": 0.4
            },
            "flavor": "Transforms into Winter Sovereign. Every fourth cast freezes enemies briefly."
          }
        ],
        "finalForm": "Winter Sovereign"
      }
    ]
  },
  "sword": {
    "name": "Swordsman",
    "role": "Circular melee",
    "cost": 85,
    "color": "#98b7d2",
    "damage": 32,
    "range": 105,
    "rate": 0.75,
    "branches": [
      {
        "name": "Greatsword",
        "description": "Greatsword strikes deal extra damage to healthy enemies.",
        "skills": [
          {
            "name": "Sharpened edge",
            "cost": 75,
            "effect": {
              "damage": 18
            },
            "flavor": "Hones the cutting edge of every circular sweep."
          },
          {
            "name": "Two-handed blade",
            "cost": 140,
            "effect": {
              "damage": 22,
              "range": 8
            },
            "flavor": "Fits a two-handed blade with a longer reach."
          },
          {
            "name": "Broad sweep",
            "cost": 240,
            "effect": {
              "damage": 26,
              "range": 10,
              "opening": 0.1
            },
            "flavor": "Greatsword strikes deal extra damage to healthy enemies."
          },
          {
            "name": "Runic greatsword",
            "cost": 380,
            "effect": {
              "damage": 30
            },
            "flavor": "Etches the greatsword with runes for heavier cleaves."
          },
          {
            "name": "Sunsteel Colossus",
            "cost": 560,
            "effect": {
              "damage": 40,
              "range": 15,
              "opening": 0.15
            },
            "flavor": "Transforms into Sunsteel Colossus. Greatsword strikes deal extra damage to healthy enemies."
          }
        ],
        "finalForm": "Sunsteel Colossus"
      },
      {
        "name": "Shield knight",
        "description": "Every fourth shield sweep stuns nearby enemies.",
        "skills": [
          {
            "name": "Iron buckler",
            "cost": 75,
            "effect": {
              "damage": 5,
              "slow": 0.077
            },
            "flavor": "Straps on an iron buckler to stagger enemies with each sweep."
          },
          {
            "name": "Tower shield",
            "cost": 140,
            "effect": {
              "damage": 8,
              "slow": 0.091,
              "slowTime": 0.7
            },
            "flavor": "Carries a tower shield that keeps enemies slowed longer."
          },
          {
            "name": "Spiked rim",
            "cost": 240,
            "effect": {
              "damage": 12,
              "slow": 0.098,
              "stun": 0.25
            },
            "flavor": "Every fourth shield sweep stuns nearby enemies."
          },
          {
            "name": "Royal bulwark",
            "cost": 380,
            "effect": {
              "damage": 16,
              "slowTime": 1
            },
            "flavor": "Reinforces the bulwark to prolong the stagger."
          },
          {
            "name": "Lionheart Paladin",
            "cost": 560,
            "effect": {
              "damage": 24,
              "slow": 0.14,
              "range": 12,
              "stun": 0.35
            },
            "flavor": "Transforms into Lionheart Paladin. Every fourth shield sweep stuns nearby enemies."
          }
        ],
        "finalForm": "Lionheart Paladin"
      },
      {
        "name": "Twin blades",
        "description": "Spinning blades open wounds that bleed for three seconds.",
        "skills": [
          {
            "name": "Balanced grip",
            "cost": 75,
            "effect": {
              "damage": 4,
              "haste": 0.19
            },
            "flavor": "Balances the grips for quicker melee sweeps."
          },
          {
            "name": "Second blade",
            "cost": 140,
            "effect": {
              "damage": 6,
              "haste": 0.25
            },
            "flavor": "Adds a second blade to accelerate spinning attacks."
          },
          {
            "name": "Wrist guards",
            "cost": 240,
            "effect": {
              "damage": 8,
              "haste": 0.3,
              "bleed": 5
            },
            "flavor": "Spinning blades open wounds that bleed for three seconds."
          },
          {
            "name": "Silver sabers",
            "cost": 380,
            "effect": {
              "damage": 10,
              "haste": 0.35
            },
            "flavor": "Replaces the blades with lighter silver sabers."
          },
          {
            "name": "Crimson Bladedancer",
            "cost": 560,
            "effect": {
              "damage": 14,
              "haste": 0.5,
              "bleed": 8
            },
            "flavor": "Transforms into Crimson Bladedancer. Spinning blades open wounds that bleed for three seconds."
          }
        ],
        "finalForm": "Crimson Bladedancer"
      }
    ]
  },
  "archer": {
    "name": "Archer",
    "role": "Flying arrows",
    "cost": 95,
    "color": "#a6c96b",
    "damage": 18,
    "range": 230,
    "rate": 0.65,
    "branches": [
      {
        "name": "Longbow",
        "description": "Arrows pierce enemies behind their target.",
        "skills": [
          {
            "name": "Oak limbs",
            "cost": 75,
            "effect": {
              "damage": 17,
              "range": 15
            },
            "flavor": "Carves stronger oak limbs for harder, longer shots."
          },
          {
            "name": "Reinforced string",
            "cost": 140,
            "effect": {
              "damage": 20,
              "range": 20
            },
            "flavor": "Tightens the bowstring to send arrows farther."
          },
          {
            "name": "Bodkin arrows",
            "cost": 240,
            "effect": {
              "damage": 24,
              "pierce": 1
            },
            "flavor": "Arrows pierce enemies behind their target."
          },
          {
            "name": "Eagle feathers",
            "cost": 380,
            "effect": {
              "damage": 28,
              "range": 25
            },
            "flavor": "Fletches arrows with eagle feathers for reach and impact."
          },
          {
            "name": "Dragonbone Deadeye",
            "cost": 560,
            "effect": {
              "damage": 38,
              "range": 35,
              "pierce": 1
            },
            "flavor": "Transforms into Dragonbone Deadeye. Arrows pierce enemies behind their target."
          }
        ],
        "finalForm": "Dragonbone Deadeye"
      },
      {
        "name": "Multishot",
        "description": "Volley arrows fly faster, reducing time to impact.",
        "skills": [
          {
            "name": "Split nock",
            "cost": 75,
            "effect": {
              "damage": 3,
              "shots": 1
            },
            "flavor": "Splits the arrow nock to shoot a second target."
          },
          {
            "name": "Twin bow",
            "cost": 140,
            "effect": {
              "damage": 4,
              "shots": 1
            },
            "flavor": "Mounts a twin bow to add another arrow per volley."
          },
          {
            "name": "Triple quiver",
            "cost": 240,
            "effect": {
              "damage": 5,
              "shots": 1,
              "flight": 0.3
            },
            "flavor": "Volley arrows fly faster, reducing time to impact."
          },
          {
            "name": "Fan-shot grip",
            "cost": 380,
            "effect": {
              "damage": 6,
              "shots": 1
            },
            "flavor": "Adds a fan-shot grip for another simultaneous target."
          },
          {
            "name": "Skyfeather Ranger",
            "cost": 560,
            "effect": {
              "damage": 8,
              "shots": 2,
              "flight": 0.5
            },
            "flavor": "Transforms into Skyfeather Ranger. Volley arrows fly faster, reducing time to impact."
          }
        ],
        "finalForm": "Skyfeather Ranger"
      },
      {
        "name": "Venom bow",
        "description": "Repeated venom hits build up poison, up to three doses; extra doses add 25% poison damage each.",
        "skills": [
          {
            "name": "Thorn tips",
            "cost": 75,
            "effect": {
              "damage": 4,
              "poison": 7
            },
            "flavor": "Cuts barbed thorn tips that poison on impact."
          },
          {
            "name": "Venom flask",
            "cost": 140,
            "effect": {
              "damage": 6,
              "poison": 10
            },
            "flavor": "Coats each arrow with a stronger venom flask."
          },
          {
            "name": "Nightshade resin",
            "cost": 240,
            "effect": {
              "damage": 8,
              "poison": 14,
              "venomStacks": 1
            },
            "flavor": "Repeated venom hits build up poison, up to three doses; extra doses add 25% poison damage each."
          },
          {
            "name": "Viper fangs",
            "cost": 380,
            "effect": {
              "damage": 10,
              "poison": 18
            },
            "flavor": "Fits viper fangs to deliver a more potent poison."
          },
          {
            "name": "Viper Queen",
            "cost": 560,
            "effect": {
              "damage": 12,
              "poison": 25,
              "venomStacks": 1
            },
            "flavor": "Transforms into Viper Queen. Repeated venom hits build up poison, up to three doses; extra doses add 25% poison damage each."
          }
        ],
        "finalForm": "Viper Queen"
      }
    ]
  },
  "bomber": {
    "name": "Bomber",
    "role": "Lobbed explosives",
    "cost": 140,
    "color": "#c899d3",
    "damage": 42,
    "range": 185,
    "rate": 1.65,
    "splash": 55,
    "branches": [
      {
        "name": "Siege bombs",
        "description": "Bombs release a delayed secondary explosion.",
        "skills": [
          {
            "name": "Packed powder",
            "cost": 75,
            "effect": {
              "damage": 24,
              "splash": 10
            },
            "flavor": "Packs more black powder into a wider blast."
          },
          {
            "name": "Iron casing",
            "cost": 140,
            "effect": {
              "damage": 30,
              "splash": 12
            },
            "flavor": "Fits an iron casing for heavier explosive impacts."
          },
          {
            "name": "Shrapnel shell",
            "cost": 240,
            "effect": {
              "damage": 36,
              "splash": 14,
              "cluster": 0.12
            },
            "flavor": "Bombs release a delayed secondary explosion."
          },
          {
            "name": "Siege satchel",
            "cost": 380,
            "effect": {
              "damage": 42,
              "range": 15
            },
            "flavor": "Carries a siege satchel to throw larger bombs farther."
          },
          {
            "name": "Ironclad Demolisher",
            "cost": 560,
            "effect": {
              "damage": 55,
              "splash": 20,
              "cluster": 0.18
            },
            "flavor": "Transforms into Ironclad Demolisher. Bombs release a delayed secondary explosion."
          }
        ],
        "finalForm": "Ironclad Demolisher"
      },
      {
        "name": "Quick fuse",
        "description": "Every fourth throw releases a second bomb.",
        "skills": [
          {
            "name": "Trimmed wick",
            "cost": 75,
            "effect": {
              "damage": 5,
              "haste": 0.22
            },
            "flavor": "Trims each wick to throw bombs more frequently."
          },
          {
            "name": "Fuse belt",
            "cost": 140,
            "effect": {
              "damage": 7,
              "haste": 0.28
            },
            "flavor": "Wears a fuse belt to prepare the next bomb faster."
          },
          {
            "name": "Throwing gloves",
            "cost": 240,
            "effect": {
              "damage": 9,
              "haste": 0.35,
              "echo": 0.15
            },
            "flavor": "Every fourth throw releases a second bomb."
          },
          {
            "name": "Bomb bandolier",
            "cost": 380,
            "effect": {
              "damage": 12,
              "haste": 0.45
            },
            "flavor": "Adds a loaded bandolier for faster repeated throws."
          },
          {
            "name": "Clockwork Bombardier",
            "cost": 560,
            "effect": {
              "damage": 16,
              "haste": 0.6,
              "echo": 0.2
            },
            "flavor": "Transforms into Clockwork Bombardier. Every fourth throw releases a second bomb."
          }
        ],
        "finalForm": "Clockwork Bombardier"
      },
      {
        "name": "Tar bombs",
        "description": "Bombs leave sticky tar that slows enemies walking through it.",
        "skills": [
          {
            "name": "Sticky pitch",
            "cost": 75,
            "effect": {
              "damage": 5,
              "slow": 0.12
            },
            "flavor": "Mixes sticky pitch into explosions to slow the crowd."
          },
          {
            "name": "Tar barrel",
            "cost": 140,
            "effect": {
              "damage": 8,
              "slow": 0.13,
              "slowTime": 0.7
            },
            "flavor": "Replaces the bomb casing with a tar barrel for a longer slow."
          },
          {
            "name": "Thick resin",
            "cost": 240,
            "effect": {
              "damage": 11,
              "splash": 12,
              "tar": 1.2
            },
            "flavor": "Bombs leave sticky tar that slows enemies walking through it."
          },
          {
            "name": "Adhesive shell",
            "cost": 380,
            "effect": {
              "damage": 14,
              "slow": 0.15,
              "slowTime": 1
            },
            "flavor": "Seals adhesive shells to make the slow stronger and longer."
          },
          {
            "name": "Bogbrew Alchemist",
            "cost": 560,
            "effect": {
              "damage": 20,
              "slow": 0.2,
              "splash": 18,
              "tar": 1.3
            },
            "flavor": "Transforms into Bogbrew Alchemist. Bombs leave sticky tar that slows enemies walking through it."
          }
        ],
        "finalForm": "Bogbrew Alchemist"
      }
    ]
  },
  "fire": {
    "name": "Fire Tower",
    "role": "Flame projectiles",
    "cost": 130,
    "color": "#f4ac60",
    "damage": 14,
    "range": 145,
    "rate": 0.35,
    "splash": 32,
    "burn": 8,
    "branches": [
      {
        "name": "Blast furnace",
        "description": "Fireballs deal bonus damage to enemies already burning.",
        "skills": [
          {
            "name": "Coal basket",
            "cost": 75,
            "effect": {
              "damage": 10,
              "burn": 7
            },
            "flavor": "Loads a coal basket for hotter fireballs and stronger burns."
          },
          {
            "name": "Bellows",
            "cost": 140,
            "effect": {
              "damage": 14,
              "burn": 9
            },
            "flavor": "Works the bellows to intensify the heat."
          },
          {
            "name": "Firebrick lining",
            "cost": 240,
            "effect": {
              "damage": 18,
              "burn": 12,
              "sear": 0.1
            },
            "flavor": "Fireballs deal bonus damage to enemies already burning."
          },
          {
            "name": "Molten core",
            "cost": 380,
            "effect": {
              "damage": 22,
              "burn": 15
            },
            "flavor": "Installs a molten core to amplify both impact and burning."
          },
          {
            "name": "Dragonheart Foundry",
            "cost": 560,
            "effect": {
              "damage": 30,
              "burn": 20,
              "sear": 0.15
            },
            "flavor": "Transforms into Dragonheart Foundry. Fireballs deal bonus damage to enemies already burning."
          }
        ],
        "finalForm": "Dragonheart Foundry"
      },
      {
        "name": "Flame cannon",
        "description": "Flames burn through targets along the line of fire.",
        "skills": [
          {
            "name": "Brass nozzle",
            "cost": 75,
            "effect": {
              "damage": 3,
              "range": 20
            },
            "flavor": "Fits a brass nozzle to throw flames farther."
          },
          {
            "name": "Long barrel",
            "cost": 140,
            "effect": {
              "damage": 5,
              "range": 25
            },
            "flavor": "Adds a long barrel for more distant fireball shots."
          },
          {
            "name": "Pressure valve",
            "cost": 240,
            "effect": {
              "damage": 7,
              "splash": 15,
              "flamePierce": 1
            },
            "flavor": "Flames burn through targets along the line of fire."
          },
          {
            "name": "Wide-bore muzzle",
            "cost": 380,
            "effect": {
              "damage": 9,
              "range": 30
            },
            "flavor": "Rebuilds the muzzle to extend the flame cannon\u2019s reach."
          },
          {
            "name": "Solar Lance",
            "cost": 560,
            "effect": {
              "damage": 13,
              "splash": 25,
              "range": 25,
              "flamePierce": 1
            },
            "flavor": "Transforms into Solar Lance. Flames burn through targets along the line of fire."
          }
        ],
        "finalForm": "Solar Lance"
      },
      {
        "name": "Ember brazier",
        "description": "Fireballs leave a lasting bed of damaging embers.",
        "skills": [
          {
            "name": "Cinder bed",
            "cost": 75,
            "effect": {
              "damage": 2,
              "burn": 12
            },
            "flavor": "Builds a cinder bed that increases burn damage."
          },
          {
            "name": "Ember grate",
            "cost": 140,
            "effect": {
              "damage": 4,
              "burn": 15,
              "burnTime": 1
            },
            "flavor": "Adds an ember grate to keep targets burning longer."
          },
          {
            "name": "Slow-burning oil",
            "cost": 240,
            "effect": {
              "damage": 6,
              "burn": 18,
              "burnTime": 1,
              "embers": 1.2
            },
            "flavor": "Fireballs leave a lasting bed of damaging embers."
          },
          {
            "name": "Phoenix coals",
            "cost": 380,
            "effect": {
              "damage": 8,
              "burn": 22,
              "burnTime": 1
            },
            "flavor": "Loads phoenix coals for stronger, longer-lasting burns."
          },
          {
            "name": "Phoenix Sanctuary",
            "cost": 560,
            "effect": {
              "damage": 12,
              "burn": 30,
              "burnTime": 2,
              "embers": 1.3
            },
            "flavor": "Transforms into Phoenix Sanctuary. Fireballs leave a lasting bed of damaging embers."
          }
        ],
        "finalForm": "Phoenix Sanctuary"
      }
    ]
  }
};
const labels={damage:'damage',range:'range',chain:'chain target',slow:'slow',slowTime:'slow seconds',haste:'attack speed',splash:'blast radius',shots:'extra target',poison:'poison / sec',burn:'burn / sec',burnTime:'burn seconds',overload:'fourth-cast multiplier',chainPower:'chain damage multiplier',freeze:'fourth-cast freeze seconds',opening:'healthy-target damage multiplier',stun:'fourth-sweep stun seconds',bleed:'bleed / sec',pierce:'pierced target',flight:'projectile speed multiplier',venomStacks:'maximum poison dose',cluster:'secondary blast multiplier',echo:'fourth-throw bonus bomb multiplier',tar:'tar field seconds',sear:'burning-target damage multiplier',flamePierce:'flame penetration target',embers:'ember field seconds'};
for(const tower of Object.values(TOWERS)) for(const b of tower.branches) for(const s of b.skills) s.description=(s.flavor?s.flavor+' ':'')+Object.entries(s.effect).map(([k,v])=>`+${k==='slow'||k==='haste'?Math.round(v*100)+'%':v} ${labels[k]}`).join(' · ');
export function stats(tower){const b=TOWERS[tower.type]; const s={damage:b.damage,range:b.range,rate:b.rate,splash:b.splash||0,burn:b.burn||0,burnTime:2,slow:0,slowTime:1,poison:0,chain:0,shots:1,haste:0,overload:0,chainPower:0,freeze:0,opening:0,stun:0,bleed:0,pierce:0,flight:0,venomStacks:1,cluster:0,echo:0,tar:0,sear:0,flamePierce:0,embers:0};tower.tiers.forEach((n,bx)=>{for(let i=0;i<n;i++)for(const [k,v] of Object.entries(b.branches[bx].skills[i].effect))s[k]+=v;});s.rate/=1+s.haste;s.slow=Math.min(.75,s.slow);return s;}
export function upgradeStatus(t,b){if(t.tiers[b]>=5)return 'mastered';if(t.tiers[b]>=1&&t.lock!==null&&t.lock!==b)return 'locked';return 'available';}
