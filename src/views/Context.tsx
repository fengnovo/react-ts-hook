import React from 'react'
// https://www.jianshu.com/p/65b348bf86ad
const { Provider, Consumer } = React.createContext({
    desc: "这是默认的描述",
  });
  

class Children extends React.Component {
    render() {
        return <Consumer>
            {(value) => <>
                <span>Children: {value.desc}</span><br/>
                <Grandson />
            </>}
        </Consumer>
    }
}

class Grandson extends React.Component {
    render() {
        return <Consumer>
            {(value) => <span>Grandson: {value.desc}</span>}
        </Consumer>
    }
}

export default class ContextContainer extends React.Component {
    state = {
        desc: "这是父组件定义的描述",
    }
    render() {
       return  <Provider value={this.state}>
            <Children />
       </Provider>
    }
}