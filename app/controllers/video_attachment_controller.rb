class VideoAttachmentController < ApplicationController
  def get_video_mask
    mask = VideoAttachment.find_by(kind: 'mask')
    video = VideoAttachment.find_by(kind: 'videoMask')

    render json: {mask: mask, video: video}
  end

  def set_mask
    mask = params[:mask]
    maskRec = VideoAttachment.find_or_create_by(kind: 'mask')
    maskRec.link = mask

    maskRec.save
  end

  def set_video_mask
    link = params[:link]
    video = VideoAttachment.find_or_create_by(kind: 'videoMask')
    video.link = link

    video.save

    if video.save
      render json: {link: {link:link}}
    end
  end

  def get_video_custom
    video = VideoAttachment.find_by(kind: 'videoCustom')

    render json: {videoCustom: video}
  end

  def set_video_custom
    link = params[:link]
    video = VideoAttachment.find_or_create_by(kind: 'videoCustom')
    video.link = link

    video.save
  end
end
