class ImageTabAttachmentController < ApplicationController
  def create
    newImage = ImageTabAttachment.new
    newImage.link = params[:image]
    newImage.save
  end
end
