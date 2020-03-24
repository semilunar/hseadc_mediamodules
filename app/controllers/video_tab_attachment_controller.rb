class VideoTabAttachmentController < ApplicationController
  def create
    position = params[:position]

    img = ImageTabAttachment.find_by(position: position)
    if img
      img.destroy
    end


    newLink = VideoTabAttachment.find_or_create_by(position: position)
    newLink.link = params[:link]
    newLink.save

    if newLink.save
      link = VideoTabAttachment.find_by(position: position)
      render json: { link: link.as_json }
    else
      puts "something goes wrong"
      redirect_to :back
    end
  end
end
