class Company < ApplicationRecord
  has_many :jobs
  has_and_belongs_to_many :users
  has_many :activity_logs, through: :jobs
end
