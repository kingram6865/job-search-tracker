class AddUserToActivityLogs < ActiveRecord::Migration[6.0]
  def change
    add_reference :activity_logs, :user, null: false, foreign_key: true
  end
end
