Rails.application.routes.draw do
  resources :rooms, except: [:new, :edit] do
    resources :messages, except: [:new, :edit]
  end

  resources :authors, except: [:new, :edit] do
    resources :messages, except: [:new, :edit]
  end
end
