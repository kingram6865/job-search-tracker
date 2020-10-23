class ActivityLogsController < ApplicationController
  before_action :set_activity, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:show, :create, :update, :destroy]

  def index
    @activities = ActivityLog.all

    render json: @activities
  end

  def show 
    render json: @activity_log, include: :job
  end

  def create
    @activity = ActivityLog.new(activity_params)

    if @activity.save
      render json: @activity, status: :created, location: @activity
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  def update
    if @activity_log.update(activity_params)
      render json: @activity_log
    else
      render json: @activity_log.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @activity_log.destroy
  end

  private

  def set_activity
    @activity_log = ActivityLog.find(params[:id])
  end

  def activity_params
    params.require(:activity_log).permit(:action, :status, :follow_up, :job_id, :user_id)
  end

end