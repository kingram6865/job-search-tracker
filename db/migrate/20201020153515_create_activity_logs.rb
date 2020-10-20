class CreateActivityLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :activity_logs do |t|
      t.datetime :entry_date
      t.string :action
      t.string :status
      t.string :follow_up

      t.timestamps
    end
  end
end
