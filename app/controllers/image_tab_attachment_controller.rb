class ImageTabAttachmentController < ApplicationController
  def create
    newImage = ImageTabAttachment.new
    newImage.url = params[:image]
    newImage.save
  end
end
