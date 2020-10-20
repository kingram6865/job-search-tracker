# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create!(username: 'mary', email: 'mary@people.net', password: '123456')
# User.create!(username: 'raymond', email: 'raymond@people.net', password: '123456')
# User.create!(username: 'david', email: 'david@people.net', password: '123456')
# User.create!(username: 'chris', email: 'chris@people.net', password: '123456')
# User.create!(username: 'bill', email: 'bill@people.net', password: '123456')
user = User.create!(username: 'hal', email: 'hal@people.net', password: '123456')

# Company.create(company_name:"IBM", industry:"tech", general_rating:5, external_recruiter: false)
# Company.create(company_name:"Hewlett-Packard", industry:"tech", general_rating:5, external_recruiter: false)
# Company.create(company_name:"Google", industry:"tech", general_rating:5, external_recruiter: false)
# Company.create(company_name:"Autodesk", industry:"tech", general_rating:5, external_recruiter: false)
company = Company.create!(company_name:"Salesforce", industry:"tech", general_rating:5, external_recruiter: false)


# Job.create!(job_name:"Programmer" , keywords:"java, React", job_details:"A lot of stuff", company_id: 1)
# Job.create!(job_name:"Programmer" , keywords:"java, React", job_details:"A lot of stuff", company_id: 2)
job = Job.create!(job_name:"Programmer" , keywords:"java, React", job_details:"A lot of stuff", company_id: 2)

ActivityLog.create!(entry_date: "2020-10-20 18:43:28", action:"recorded", status:"good", follow_up:"none", job_id: job.id, user_id: user.id)
ActivityLog.create!(entry_date: "2020-10-20 18:43:28", action:"recorded", status:"good", follow_up:"none", job_id: job.id, user_id: user.id)