import React, { Component } from 'react' ;
import CardList from '../components/CardList' ;
import Scroll from '../components/Scroll'
// import {robots} from './robots';
import Searchbox from '../components/Searchbox' ;
class App extends Component{
  constructor(){
    super();
    this.state={
      robots:[],
      searchfield:'' 
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
        return response.json();
    }).then(users=>{
      this.setState({robots : users})
    })
  }

  onSearchchange=(event)=>{
    this.setState({searchfield:event.target.value}) ;
    console.log(event.target.value);
    // console.log(filteredRobots) ;
  }
  render(){
    const filteredRobots=this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length===0){
      return <h1>Loading....</h1>;
    }else{
      return (  
        <div className ='tc'>
          <h1>Robofriends</h1>
          <Searchbox searchChange={this.onSearchchange}/>
          <Scroll> 
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}
export default App;