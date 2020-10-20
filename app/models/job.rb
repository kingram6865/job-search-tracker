class Job < ApplicationRecord
  has_many :activity_logs
  belongs_to :company
end
