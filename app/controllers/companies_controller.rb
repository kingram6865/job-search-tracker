class CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:index, :create, :update, :destroy ]

  def index
    @companies = @current_user.companies

    render json: @companies
  end

  def show 
    render json: @company
  end

  def create
    @company = Company.find_by(company_name: company_params[:company_name])
    if @company
      @company.users.push(@current_user)
      render json: @company
    else
      @company = Company.new(company_params)

      if @company.save
        @company.users.push(@current_user)
        render json: @company, status: :created, location: @company
      else  
        render json: @company.errors, status: :unprocessable_entity
      end
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

  def companylist
    @companies = Company.all

    render json: @companies
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:company_name, :industry, :general_rating, :external_recruiter)
  end
end
