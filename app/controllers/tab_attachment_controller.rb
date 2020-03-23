class TabAttachmentController < ApplicationController
   before_action :set_tabattachment, only: [:destroy]

  def destroy
    @tabattachment.destroy
    end

end
