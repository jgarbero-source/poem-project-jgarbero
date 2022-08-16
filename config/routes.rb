Rails.application.routes.draw do
  resources :favorites
  resources :comments
  resources :users
  resources :poems
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # get "/userfavorites", to: "users#user_favorites"

  delete "/userfavorites", to: "users#user_favorites"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
    
end
