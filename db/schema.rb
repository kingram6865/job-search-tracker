# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_26_002812) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activity_logs", force: :cascade do |t|
    t.datetime "entry_date"
    t.string "action"
    t.string "status"
    t.string "follow_up"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "job_id", null: false
    t.bigint "user_id", null: false
    t.index ["job_id"], name: "index_activity_logs_on_job_id"
    t.index ["user_id"], name: "index_activity_logs_on_user_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "company_name"
    t.string "industry"
    t.integer "general_rating"
    t.boolean "external_recruiter"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "companies_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "company_id", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "job_name"
    t.string "keywords"
    t.text "job_details"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "company_id", null: false
    t.index ["company_id"], name: "index_jobs_on_company_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "activity_logs", "jobs"
  add_foreign_key "activity_logs", "users"
  add_foreign_key "jobs", "companies"
end
