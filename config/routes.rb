Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
    resources :posts, only: %i[index create]
  end

  # Forward all requests to StaticController#index but requests must be non-Ajax
  # (!req.xhr?) and HTML Mime type (req.format.html?). This does not include the
  # root ("/") path
  get '*page', to: 'reactapp#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'reactapp#index'
end
