import React from 'react';
import { connect } from 'react-redux';
import {
  incrementAction,
  decrementAction,
} from '../containers/HomeContainer/action';
import Counter from '../components/Counter/Counter';
import { useInjectReducer } from '../utils/injectReducer';
import reducer from '../containers/HomeContainer/reducer';

const key = 'homeContainer';
function Home({ onIncrement, counter, onDecrement }) {
  useInjectReducer({ key, reducer });

  return (
    <div>
      <Counter
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state && state.homeContainer && state.homeContainer.counter, // Adjust according to your state structure
  };
};

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(incrementAction()),
  onDecrement: () => dispatch(decrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
