Rails.application.routes.draw do
  root 'pages#index'

  get  'tabattachment',       to: 'tab_attachment#get_all'
  post 'newimage',            to: 'image_tab_attachment#create'
  post 'newlink',             to: 'video_tab_attachment#create'
  post 'newtabtitle',         to: 'tab_attachment#new_tab_title'
  post 'deletetabattachment', to: 'tab_attachment#delete'

  get 'videomask',       to: 'video_attachment#get_video_mask'
  get 'videocustom',     to: 'video_attachment#get_video_custom'
  post 'setmask',        to: 'video_attachment#set_mask'
  post 'setvideomask',   to: 'video_attachment#set_video_mask'
  post 'setvideocustom', to: 'video_attachment#set_video_custom'

  post 'getsliderimg',        to: 'slider_attachment#get_by_kind'
  post 'newsliderimg',        to: 'slider_attachment#create'
end
