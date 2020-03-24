Rails.application.routes.draw do
  root 'pages#index'

  get  'tabattachment',  to: 'tab_attachment#get_all'
  post 'newimage',            to: 'image_tab_attachment#create'
  post 'newlink',             to: 'video_tab_attachment#create'
  post 'newtabtitle',         to: 'tab_attachment#new_tab_title'

  post 'deletetabattachment', to: 'tab_attachment#delete'
end
