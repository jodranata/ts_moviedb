import { Dispatch } from 'redux';

import {
  COLLAPSE_ANIMATION,
  FADE_ANIMATION,
  AnimationActionType,
} from '../types';

const setAnimationAction = (
  animationType: 'fade' | 'collapse',
  isAnimate: boolean,
) => (dispatch: Dispatch<AnimationActionType>): unknown => {
  if (animationType !== 'fade' && animationType !== 'collapse') return;
  return dispatch({
    type: animationType === 'fade' ? FADE_ANIMATION : COLLAPSE_ANIMATION,
    payload: isAnimate,
  });
};

export default setAnimationAction;
