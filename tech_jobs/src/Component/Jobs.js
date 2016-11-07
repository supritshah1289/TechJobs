import React, {Component}   from 'react';


class Jobs extends Component{
  constructor(){
    super();
    this.state = {
      display: ""
    }
  }

  handleDescription(){
    console.log('clicked');

    this.setState({
      display: "block"
    })

  }

  renderJobs(job,i){
    console.log("logging jobs",job)

    var parseHtml = job.description.replace(/<\/?[^>]+(>|$)/g," ");

    return(
      <div className="jobcard" key={i} onClick={this.handleDescription.bind(this)}>
          <h2>{job.title}</h2>
          <p>{job.company.location.city} || {job.title} </p>
          <a href={job.apply_url} target="_blank">Apply</a>
          <article style={{display: this.state.display}} className="job-description">
            {parseHtml}
          </article>
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
