class JobsController < ApplicationController
  before_action :set_job, only: [:show, :update, :destroy]
  before_action :authorize_request

  def index
    @jobs = @current_user.jobs.group(:id)

    render json: @jobs, include: [:activity_logs, :company]
  end

  def show 
    render json: @job, include: [:activity_logs, :company]
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