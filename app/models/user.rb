class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  has_many :activity_logs
  has_and_belongs_to_many :companies
  has_many :jobs, through: :companies

  def return_data
   {
    id: id,
    username: username,
    email: email,
    created_at: created_at,
    updated_at: updated_at,
   }
  end 
end
