Rails.application.routes.draw do
  root 'pages#index'

  get 'videotabattachment', to: 'video_tab_attachment#get_links_to_videos'
  post 'newimage', to: 'image_tab_attachment#create'
end
