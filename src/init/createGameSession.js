import { config } from '../config/config.js';
import { addGameSession } from '../session/game.session.js';
import CustomError from '../utils/error/customError.js';
import { ErrorCodes } from '../utils/error/errorCodes.js';

export const createGameSession = () => {
  try {
    const gameSession = addGameSession();
    console.log('게임 세션 생성 완료 : ', gameSession);
  } catch (e) {
    console.error('게임 세션 생성 실패 : ', e);
  }
};
