class AddCompanyToJobs < ActiveRecord::Migration[6.0]
  def change
    add_reference :jobs, :company, null: false, foreign_key: true
  end
end
