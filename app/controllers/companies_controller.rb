class CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:show, :create, :update, :destroy] 

  def index
    @companies = Company.all

    render json: @companies
  end

  def show 
    render json: @company, include: :jobs

    if @company.save
      render json: @food, status: :created, location: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  def create
    @company = Company.new(copmany_params)

    if @company.save
      render json: @company, status: :created, location: @company
    else  
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  def update
    if @company.update(company_params)
      render json: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  def destroy
  @company.destroy    
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:company_name, :industry, :general_rating, :external_recruiter)
  end
end
