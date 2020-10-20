class Job < ApplicationRecord
  has_many :activity_logs
  has_many :users, through: :activity_logs
  belongs_to :company
end
