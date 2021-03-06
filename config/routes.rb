Rails.application.routes.draw do

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/companylist', to: 'companies#companylist'
  
  resources :users
  resources :companies
  resources :jobs
  resources :activity_logs

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
