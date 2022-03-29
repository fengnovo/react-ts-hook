import React, { Component } from 'react';

interface Istate {
    count: number
}
interface Iprops {
    count: number
    decrease: () => void 
    increase: () => void
}

type HOCFunction = (arg: React.FC<Iprops>) => Function

const withCount: HOCFunction = (WrappedComponent: React.FC<Iprops>) =>
  class extends Component<any, Istate> {
    constructor(props: any) {
      super(props);
 
      this.state = {
        count: 0
      };
    }
 
    increase = () =>
      this.setState((prevState: { count: number; }) => ({ count: prevState.count + 1 }));
 
    decrease = () =>
      this.setState((prevState: { count: number; }) => ({ count: prevState.count - 1 }));
 
    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          count={count}
          increase={this.increase}
          decrease={this.decrease}
          {...this.props}
        />
      );
    }
  };
 
const Counter: React.FC<Iprops> = ({ count, increase }) => (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={increase}>
      Click me
    </button>
  </div>
);
 
export default withCount(Counter);