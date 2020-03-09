class ChangeTabAttachmentColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :tab_attachments, :url, :link
  end
end
