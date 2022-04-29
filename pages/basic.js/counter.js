import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '@/modules/basic/counter';
import { Counter } from '@/components/basic/Counter';

const CounterPage = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
};

export default connect(
  state => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(CounterPage);