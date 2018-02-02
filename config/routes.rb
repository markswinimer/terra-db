Rails.application.routes.draw do
  root "guardians#index"

  resources :guardians, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :guardians
    end
  end

end
