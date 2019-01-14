Rails.application.routes.draw do
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :static_pages, only: :index
  root "static_pages#index"
  namespace :admin do
    resources :garages
    resources :static_pages, only: %i(index)
  end
end
