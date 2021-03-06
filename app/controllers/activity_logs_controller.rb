class ActivityLogsController < ApplicationController
  before_action :set_activity, only: [:show, :update, :destroy]
  before_action :authorize_request

  def index
    @activities = @current_user.activity_logs

    render json: @activities, include: [:job, :user]
  end

  def show 
    render json: @activity_log, include: [:job, :user]
  end

  def create
    @activity = ActivityLog.new(activity_params)
    @activity.user = @current_user
    
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