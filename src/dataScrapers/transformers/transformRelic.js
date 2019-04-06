'use strict';

const transformDropClass = (dropList) => {
  const drops = dropList.map(it => ({
    item: it.Item === 'FORMA'
      ? it.Item.toLowerCase()
      : `${it.Item} PRIME`.toLowerCase(),
    part: it.Part.toLowerCase(),
    rarity: it.Rarity.toLowerCase(),
  }));
  return drops;
};


const transformRelic = (oldRelic) => {
  let newRelic;

  try {
    const {
      Name,
      Tier,
      IsVaulted,
      IsBaro,
      Drops,
    } = oldRelic;

    newRelic = {
      name: Name,
      tier: Tier,
      valuted: IsVaulted || 0,
      baro: IsBaro || 0,
      drops: {
        common: transformDropClass(Drops.filter(it => it.Rarity === 'Common')),
        uncommon: transformDropClass(Drops.filter(it => it.Rarity === 'Uncommon')),
        rare: transformDropClass(Drops.filter(it => it.Rarity === 'Rare')),
      },
    };
  } catch (error) {
    console.error(`Error parsing ${oldRelic.Name}`);
    console.error(error);
  }

  return newRelic;
};

module.exports = transformRelic;
