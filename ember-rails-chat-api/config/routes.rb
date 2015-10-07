Rails.application.routes.draw do
  resources :messages, except: [:new, :edit]
  resources :authors, except: [:new, :edit]
end
