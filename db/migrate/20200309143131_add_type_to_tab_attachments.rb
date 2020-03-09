class AddTypeToTabAttachments < ActiveRecord::Migration[6.0]
  def change
    add_column :tab_attachments, :type, :string, default: 'VideoTabAttachment'
  end
end
