class SliderAttachmentController < ApplicationController
  def create
    position = params[:position]
    kind = params[:kind]

    newSlide = SliderAttachment.find_or_create_by(position: position, kind: kind)
    newSlide.link = params[:image]
    newSlide.save

    if newSlide.save
      slide = SliderAttachment.find_by(position: position)
      render json: { slide: slide.as_json }
    else
      puts "something goes wrong"
      redirect_to :back
    end
  end

  def get_by_kind
    kind = params[:kind]

    slides = SliderAttachment.where(:kind => kind)

    puts 'slides'
    puts slides

    render json: {slides: slides}
  end

end
