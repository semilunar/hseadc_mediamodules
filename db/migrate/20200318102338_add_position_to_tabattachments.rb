class AddPositionToTabattachments < ActiveRecord::Migration[6.0]
  def change
    add_column :tab_attachments, :position, :integer
  end
end
