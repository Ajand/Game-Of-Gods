const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const createGameState = (player1, player2, currentPlayer) => {
  const starterPlayer = currentPlayer ? currentPlayer : getRandomInt(2);
  return {
    starterPlayer,
    currentPlayer: starterPlayer,
    currentRound: 0,
    actionPointUsedInRound: 0,
    halfRound: false,
    player1: {
      image: player1.image,
      energy: player1.energy,
      rage: player1.rage,
      buffs: player1.buffs ? player1.buffs : [],
      deBuffs: [],
      lastRoundAbilityUsed: [],
      tier: player1.tier,
    },
    player2: {
      image: player2.image,
      energy: player2.energy,
      rage: player2.rage,
      buffs: player2.buffs ? player2.buffs : [],
      deBuffs: [],
      lastRoundAbilityUsed: [],
      tier: player2.tier,
    },
  };
};

// Actions are an array of functions that take a currentState and returns another currentState

const nextGameState = (currentState) => (actions) => {
  if (!actions.length) return currentState;
  const ta = [...actions];
  return nextGameState(ta.shift()(currentState), ta);
};

const dealDamage = (value) => (currentState) => {
  console.log(currentState.currentPlayer);
  if (currentState.currentPlayer === 0) {
    return {
      ...currentState,
      player2: {
        ...currentState.player2,
        energy: currentState.player2.energy - value,
      },
    };
  } else {
    return {
      ...currentState,
      player1: {
        ...currentState.player1,
        energy: currentState.player1.energy - value,
      },
    };
  }
};

const changeRage = (value) => (currentState) => {
  console.log(currentState.currentPlayer, currentState);
  if (currentState.currentPlayer === 1) {
    return {
      ...currentState,
      player2: {
        ...currentState.player2,
        rage: currentState.player2.rage - value,
      },
    };
  } else {
    return {
      ...currentState,
      player1: {
        ...currentState.player1,
        rage: currentState.player1.rage - value,
      },
    };
  }
};

const heal = (value) => (currentState) => {
  if (currentState.currentPlayer === 1) {
    return {
      ...currentState,
      player2: {
        ...currentState.player2,
        energy: currentState.player2.energy - value,
      },
    };
  } else {
    return {
      ...currentState,
      player1: {
        ...currentState.player1,
        energy: currentState.player1.energy - value,
      },
    };
  }
};

const changeActionPointUsedInRound = (value) => (currentState) => {
  return {
    ...currentState,
    actionPointUsedInRound: currentState.actionPointUsedInRound + value,
  };
};

const addToLastRoundeAbilityUsed = (value) => (currentState) => {
  if (currentState.currentPlayer === 1) {
    return {
      ...currentState,
      player2: {
        ...currentState.player2,
        lastRoundAbilityUsed: [
          ...currentState.player2.lastRoundAbilityUsed,
          value,
        ],
      },
    };
  } else {
    return {
      ...currentState,
      player1: {
        ...currentState.player1,
        lastRoundAbilityUsed: [
          ...currentState.player1.lastRoundAbilityUsed,
          value,
        ],
      },
    };
  }
};

const nextRound = () => (currentState) => {
  if (currentState.halfRound) {
    return {
      ...currentState,
      currentPlayer: currentState.currentPlayer == 0 ? 1 : 0,
      actionPointUsedInRound: 0,
      halfRound: false,
      currentRound: currentState.currentRound + 1,
    };
  } else {
    return {
      ...currentState,
      actionPointUsedInRound: 0,
      halfRound: true,
      currentPlayer: currentState.currentPlayer == 0 ? 1 : 0,
    };
  }
};

export {
  createGameState,
  nextGameState,
  heal,
  dealDamage,
  changeRage,
  changeActionPointUsedInRound,
  addToLastRoundeAbilityUsed,
  nextRound,
};
