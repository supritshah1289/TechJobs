class TechjobsController < ApplicationController

  def jobs

  api = ENV["AUTHENTIC_JOBS_API"]
  searchword = params[:searchword]
  print searchword
  data = HTTParty.get("https://authenticjobs.com/api/?api_key=#{api}&method=aj.jobs.search&keywords=#{searchword}")
  render json: data
  end

end
