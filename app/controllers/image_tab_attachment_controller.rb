class ImageTabAttachmentController < ApplicationController
  def create
    newImage = ImageTabAttachment.new
    newImage.link = params[:image]
    newImage.save

    if newImage.save
      redirect_to root_path
    else
      puts "something goes wrong"
      redirect_to :back
    end
  end

  def show
    img = ImageTabAttachment.last

    render json: { img: img.as_json }
  end

end
