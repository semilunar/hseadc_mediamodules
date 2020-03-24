class CreateSliderAttachments < ActiveRecord::Migration[6.0]
  def change
    create_table :slider_attachments do |t|
      t.string :link
      t.integer :position
      t.string :kind

      t.timestamps
    end
  end
end
