//The Brawn= hp:18   energy:8
//The Caster= hp:9 energy 17
//The Silent= hp= 13 energy= 13



ATTACKS


const silentSilentStrike = {
    id: 'action1',
    name: 'Silent Strike',
    description: 'You appear behind your opponent and attempt to backstab them.',
    minEffectiveRoll: 6,
    damage: 5,
    energyReq: 4
};

const silentDaggerThrow = {
    id: 'action2',
    name: 'Dagger Throw',
    description: 'You attempt to throw a dagger at your enemy.',
    minEffectiveRoll: 3,
    damage: 1,
    energyReq: 1
};

const silentDualWielding = {
    id: 'action3',
    name: 'Dual Wielding',
    description: 'You pull out your two weapons and attempt to overwhelm your opponent.',
    minEffectiveRoll: 4,
    damage: 2,
    energyReq: 2
};


const brawnBullRush = {
    id: 'action4',
    name: 'Bull Rush',
    description: 'You scream and with quickness rush your opponent to catch them off guard.',
    minEffectiveRoll: 5,
    damage: 2,
    energyReq: 2
};

const brawnLightStrike = {
    id: 'action5',
    name: 'Light Strike',
    description: 'You attempt to strike your opponent with one of your lighter weapons.',
    minEffectiveRoll: 3,
    damage: 1,
    energyReq: 1
};

const brawnTwoHandedBlow = {
    id: 'action6',
    name: 'Two Handed Blow',
    description: 'You pull out your gigantic two handed weapon and attempt to destroy your opponent.',
    minEffectiveRoll: 6,
    damage: 4,
    energyReq: 3
};

const casterLightningStrike = {
    id: 'action7',
    name: 'Lightning Strike',
    description: 'You use your energy to call the quick lightning!',
    minEffectiveRoll: 4,
    damage: 1,
    energyReq: 1
};

const casterFireStrike = {
    id: 'action8',
    name: 'Fire Strike',
    description: 'A spout of flame erupts from your hands toward your enemy.',
    minEffectiveRoll: 5,
    damage: 3,
    energyReq: 3
};

const casterBlizzard = {
    id: 'action9',
    name: 'Blizzard',
    description: 'You freeze the water in the air and call down a blizzard.',
    minEffectiveRoll: 3,
    damage: 5,
    energyReq: 7
};

const attacks = [
    silentDaggerThrow,
    silentDualWielding,
    silentSilentStrike,
    brawnBullRush,
    brawnLightStrike,
    brawnTwoHandedBlow,
    casterBlizzard,
    casterFireStrike,
    casterLightningStrike
];

export default attacks;

DEFENSES


const silentSmokeBomb = {
    id: 'action1',
    name: 'Smoke Bomb',
    description: 'You throw a smokeBomb at your feet and hide from your attacker!',
    defenseRating: 2,
    health: 0,
    energyReq: 2
};

const silentMirrorImage = {
    id: 'action2',
    name: 'Mirror Image',
    description: 'You use your illusion skills to make a mirror image of yourself!',
    defenseRating: 4,
    health: 0,
    energyReq: 4
};

const silentDodge = {
    id: 'action3',
    name: 'Dodge',
    description: 'You attempt to slide away from your opponents attack.',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};

const casterHealingLight = {
    id: 'action7',
    name: 'Healing Light',
    description: 'You call out to your arcane powers to heal your wounds and protect you from harm.',
    defenseRating: 1,
    health: 2,
    energyReq:2
};

const casterFrostShield = {
    id: 'action8',
    name: 'Frost Shield',
    description: 'You surround yourself with a barrier made of frost.',
    defenseRating: 3,
    health: 0,
    energyReq: 5
};

const casterLightningDodge = {
    id: 'action9',
    name: 'Lightning Dodge',
    description: 'You send lightning through your body to dodge out of the way.',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};

const brawnUnstoppable = {
    id: 'action4',
    name: 'Unstoppable',
    description: 'You plant your feet and prepare to be assaulted.',
    defenseRating: 3,
    health: 0,
    energyReq: 3
};

const brawnDodge = {
    id: 'action5',
    name: 'Dodge',
    description: 'You attempt to do a barrel roll!',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};

const brawnRaiseShield = {
    id: 'action6',
    name: 'Raise Shield',
    description: 'You raise your shield to catch an attack being sent at you.',
    defenseRating: 2,
    health: 0,
    energyReq: 2
};

const defense = [
    silentDodge,
    silentMirrorImage,
    silentSmokeBomb,
    brawnDodge,
    brawnRaiseShield,
    brawnUnstoppable,
    casterFrostShield,
    casterLightningDodge,
    casterHealingLight
];

export default defense;




const brawnRiposte = {
    id: 'riposte',
    name: 'Riposte',
    description: 'You wait for the perfect moment'
}