import Game from '../classes/models/game.class.js';
import { gameSessions } from './sessions.js';

export const addGameSession = (id = 10) => {
  const session = new Game(id);
  gameSessions.push(session);
  return session;
};

export const removeGameSession = (id = 10) => {
  const index = gameSessions.findIndex((game) => game.id === id);
  if (index !== -1) {
    return gameSessions.splice(index, 1)[0];
  }
};

export const getGameSession = (id = 10) => {
  return gameSessions.find((game) => game.id === id);
};

export const getAllGameSessions = () => {
  return gameSessions;
};
