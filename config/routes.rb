Rails.application.routes.draw do
  resources :phrases
  resources :blocks
  resources :sections
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
