class VideoTabAttachmentController < ApplicationController
  def get_links_to_videos
    videoLinks = TabAttachment.where(:type => "VideoTabAttachment")

    render json: { tabs: videoLinks }
  end

  def create
    position = params[:position]

    newLink = VideoTabAttachment.find_or_create_by(position: position)
    newLink.link = params[:link]
    newLink.save

    if newLink.save
      link = VideoTabAttachment.find_by(position: position)
      render json: { link: link.as_json }
      # redirect_to root_path
    else
      puts "something goes wrong"
      redirect_to :back
    end
  end
end
