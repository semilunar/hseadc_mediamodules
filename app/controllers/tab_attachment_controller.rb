class TabAttachmentController < ApplicationController
  def get_links_to_videos
    allLinks = TabVideo.all

    render json: { tabs: allLinks }
  end
end
