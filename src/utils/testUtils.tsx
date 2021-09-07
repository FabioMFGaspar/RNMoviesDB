import React, {ReactElement} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import reducers, {initialState} from '../store/reducers';
import {StoreState} from '../types/store';

// This component is used to test the pages and make sure they
// are connected to the redux store
export function renderWithRedux(
  component: ReactElement,
  state: StoreState = initialState,
) {
  const store = createStore(reducers, state);
  const queries = render(<Provider store={store}>{component}</Provider>);

  return {
    ...queries,
    store,
  };
}
