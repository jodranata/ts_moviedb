import {
  FADE_ANIMATION,
  COLLAPSE_ANIMATION,
  AnimationActionType,
  UIState,
} from '../types';

const INIT_STATE: UIState = {
  collapseAnimation: false,
  fadeAnimation: false,
};

const handleFadeAnimation = (
  state: UIState,
  action: AnimationActionType,
): UIState => ({
  ...state,
  fadeAnimation: action.payload,
});

const handleCollapseAnimation = (
  state: UIState,
  action: AnimationActionType,
): UIState => ({
  ...state,
  collapseAnimation: action.payload,
});

const uiReducer = (
  state: UIState = INIT_STATE,
  action: AnimationActionType,
): UIState => {
  switch (action.type) {
    case FADE_ANIMATION:
      return handleFadeAnimation(state, action);
    case COLLAPSE_ANIMATION:
      return handleCollapseAnimation(state, action);
    default:
      return state;
  }
};

export default uiReducer;
