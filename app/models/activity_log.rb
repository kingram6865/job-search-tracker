class ActivityLog < ApplicationRecord
  belongs_to :job
  belongs_to :user
  has_many :companies, through: :job
end
