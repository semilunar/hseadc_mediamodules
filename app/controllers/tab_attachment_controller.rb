class TabAttachmentController < ApplicationController
  def get_all
    videoLinks = TabAttachment.where(:type => "VideoTabAttachment")
    imgLinks = TabAttachment.where(:type => "ImageTabAttachment")
    tabAll = videoLinks | imgLinks
    render json: { tabs: tabAll }
  end

  def new_tab_title
    position = params[:position]
    title = params[:title]
    result = find(position)

    result.title = title
    result.save
  end

  def find(pos)
    result = TabAttachment.where(:type => "ImageTabAttachment").find_by(position: pos) || TabAttachment.where(:type => "VideoTabAttachment").find_by(position: pos)

    return result
  end


  def delete
    position = params[:position]
    last = params[:last]

    toDelete = find(position)
    if !toDelete
      return
    end

    toDelete.destroy

    (position+1..last).each do |pos|
      res = find(pos)
      res.position = pos - 1
      res.save
    end

  end

end
