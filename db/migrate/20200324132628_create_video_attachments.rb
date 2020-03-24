class CreateVideoAttachments < ActiveRecord::Migration[6.0]
  def change
    create_table :video_attachments do |t|
      t.string :link
      t.string :kind

      t.timestamps
    end
  end
end
