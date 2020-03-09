Rails.application.routes.draw do
  root 'pages#index'

  get 'tabattachment', to: 'tab_attachment#get_links_to_videos'
end
