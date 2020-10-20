class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :job_name
      t.string :keywords
      t.text :job_details

      t.timestamps
    end
  end
end
