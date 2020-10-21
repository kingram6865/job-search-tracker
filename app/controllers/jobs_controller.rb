class JobsController < ApplicationController
  before_action :set_job, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:show, :create, :update, :destroy] 

  def index
    @jobs = Job.all

    render json: @jobs
  end

  def show 
    render json: @job, include: :activity_logs
  end

  def create
    @job = Job.new(job_params)
    @job.company = @current_company

    if @job.save
      render json: @job, status: :created, location: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @job.destroy
  end

  private

  def set_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:job_name, :keywords, :job_details, :company_id)
  end

end