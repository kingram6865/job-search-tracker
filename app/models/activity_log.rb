class ActivityLog < ApplicationRecord
  belongs_to :jobs
  belongs_to :users
end
