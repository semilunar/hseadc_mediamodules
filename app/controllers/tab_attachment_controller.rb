class TabAttachmentController < ApplicationController
  def get_links_to_videos
    allLinks = TabAttachment.all

    render json: { tabs: allLinks }
  end
end
