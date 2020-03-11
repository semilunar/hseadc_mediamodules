class VideoTabAttachmentController < ApplicationController
  def get_links_to_videos
    videoLinks = TabAttachment.where(:type => "VideoTabAttachment")

    render json: { tabs: videoLinks }
  end
end
