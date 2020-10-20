class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :industry
      t.integer :general_rating
      t.boolean :external_recruiter

      t.timestamps
    end
  end
end
