export const hpCal = (hp) => {
  if (/^[0-9]+$/.test(hp)) {
    if (hp > 100) {
      return 100;
    } else if (hp < 0) {
      return 0;
    } else {
      return parseInt(hp);
    }
  } else {
    return 0;
  }
};

export const strCal = (attacks = []) => {
  return attacks.length * 50 > 100 ? 100 : attacks.length * 50;
};

export const weakCal = (weaknesses = []) => {
  return weaknesses.length === 1 ? 100 : 0;
};

export const happinessCal = (hp, attacks, weakness) => {
  // console.log('hp', hpCal(hp));
  // console.log('damage', damageCal(attacks));
  // console.log('weakness', weakCal(weakness));
  // console.log(
  //   'happiness',
  //   hpCal(hp) / 10 + damageCal(attacks) / 10 + 10 - weakCal(weakness) / 5
  // );
  return Math.abs(
    hpCal(hp) / 10 + damageCal(attacks) / 10 + 10 - weakCal(weakness) / 5
  );
};

export const damageCal = (attacks = []) => {
  let sum = attacks.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.damage) || 0;
  }, 0);
  return sum;
};
