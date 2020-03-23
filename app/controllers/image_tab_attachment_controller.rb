class ImageTabAttachmentController < ApplicationController
  def create
    position = params[:position]

    newImage = ImageTabAttachment.find_or_create_by(position: position)
    newImage.link = params[:image]
    newImage.save

    if newImage.save
      img = ImageTabAttachment.find_by(position: position)
      render json: { img: img.as_json }
      # redirect_to root_path
    else
      puts "something goes wrong"
      redirect_to :back
    end
    
    # if TabAttachment.exists?(position: position)
    #
    # end
    # newImage = ImageTabAttachment.new

  end

  # def show
  #   img = ImageTabAttachment.last
  #
  #   render json: { img: img.as_json }
  # end

end
