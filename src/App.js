import React, { Component } from 'react';
// import DataNV from './Test.json';
// import Search from './components/Search';
// import Fuse from 'fuse.js';
// import ListView from './components/ListView';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Details from './components/DetailView'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     key: '',
  //     data: DataNV,
  //   };
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataSearch: [],
  //     value: '',
  //     hien: false
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://5a6f2daf7a276d0012b2f64e.mockapi.io/newproduct')
  //     .then((Response) => Response.json())
  //     .then((findresponse) => {
  //       this.setState({
  //         dataSearch: findresponse,
  //       })
  //     })

  // }

  // handleChange = (e) => {
  //     this.setState({
  //         value: e.target.value
  //     });
  // }


  // handleShow = () => {
  //     this.setState({
  //         hien: true
  //     });
  // }

  // handleShow1 = () => {
  //     this.setState({
  //         hien: false
  //     });
  // }

  // showResult = () => {
  //   const options = {
  //     keys: ['name']
  //   }
  //   const fuse = new Fuse(this.state.dataSearch, options)
  //   const result = fuse.search(this.state.value)
  //   result.map((e, i) => {
  //     return (
  //       <div className="modalP">
  //         <div className="sanphamtong" key={i}>
  //           <div className="sanpham111">
  //             <img src={e.picture1} />
  //             <p>{e.name}</p>
  //             <p>{e.price}$</p>
  //           </div>
  //         </div>
  //       </div>)
  //   })
  // }

  // componentDidMount() {
  //   fetch(this.state.data)
  //     .then((Response) => Response.json())
  //     .then((findresponse) => {
  //       this.setState({
  //         data: findresponse,
  //       })
  //     })
  //     .catch((error) => console.error(error))
  // }

  // HienThiTren = (u) => {
  //   this.setState(
  //     { data1: u }
  //   );
  // }

  // onSearch1 = (i) => {
  //   this.setState({
  //     key: i
  //   });
  // }


  render() {
    // const { key, data } = this.state
    // let data1 = data.filter((chia) => chia.name.toLowerCase().indexOf(key) !== -1)
    // return (
    //   <div>
    //     <Search onSearch={(i) => this.onSearch1()} />
    //     <ListView data2={data1} data={data} LayTT={(u) => this.HienThiTren(u)} />
    //   </div>
    // render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/detail/:ID`} component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
