Rails.application.routes.draw do
  root 'pages#index'

  get 'tabvideo', to: 'tab_video#get_links_to_videos'
end
