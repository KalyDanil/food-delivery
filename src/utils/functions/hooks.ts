import {
  type TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import type { RootStateType } from '../../store';
import { useDispatch as useReduxDispatch } from 'react-redux';
import type { AppDispatchType } from '../../store';

export const useSelector: TypedUseSelectorHook<RootStateType> =
  useReduxSelector;

export const useDispatch: () => AppDispatchType = useReduxDispatch;
