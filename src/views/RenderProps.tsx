import React, { ReactNode } from "react";


interface Istate {
    target: string
}

interface RenderFn {
    render: (arg: Istate) =>{}
}


class Cat extends React.Component<Istate> {
    render(): ReactNode {
        return <div>{this.props.target}</div>;
    }
}

//这里的RenderFn用来定义props的类型，Istate接口用来定义this.state的类型
class DataProvider extends React.Component<RenderFn, Istate> {
  constructor(props: RenderFn) {
    super(props);
    this.state = { target: 'Keen' };
  }
 
  render() {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }
}
 
export const Data = () => <DataProvider render={(data: Istate) => (
 <Cat target={data.target} />
)}/>; 