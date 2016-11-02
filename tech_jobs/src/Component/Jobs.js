import React, {Component}   from 'react';
import Apply                from './Apply.js';

class Jobs extends Component{


  renderJobs(job,i){
    console.log("logging jobs",job)
    return(
      <div className="jobcard" key={i}>
          <h2>{job.title}</h2>
          <p>{job.type.name}</p>
          <p>{job.company.location.name}</p>
          <Apply />
      </div>
      )
  }


  render(){
    const jobs = this.props.jobs
    return(
        <div className="jobitems">
          {jobs.map((job,i)=> this.renderJobs(job,i))}
        </div>
      )
  }
}

export default Jobs;
