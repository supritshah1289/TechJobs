import React, {Component}               from 'react';

//render components
import Jobs                             from '../Component/Jobs.js';
import Maps                             from '../Component/Maps.js';
import Helpers                          from '../Utils/Helpers.js';

class Body extends Component{
  constructor(){
    super();
    this.state = {
      searchword: "",
      venues: [],
      jobs: [],
      display: "none"
    }
  }


  handleChange(e){
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      searchword: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log("clicked")
    const params = {searchword: this.state.searchword}
    Helpers.searchAuthenticJobs(params).then((res)=>{
      this.setState({
        venues: res.data.rsp.listings.listing,
        jobs: res.data.rsp.listings.listing,
        display: "block"
      })
    })

  }

  render(){

    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }


    return(
        <div className="container">

          <div className="main">
              <input type="text" placeholder="HTML, CSS, JavaScript, NodeJS" onChange={(e) => this.handleChange(e)}/>
              <button type="button" onClick={(e)=>this.handleSubmit(e)}> Search </button>
          </div>

          <div className="jobs" style={{display: this.state.display}}>
            <Jobs jobs={this.state.jobs}/>
          </div>

          <div className="maps">
            <Maps center={location} markers={this.state.venues}/>
          </div>

        </div>
      )
  }
}

export default Body;
