class CreateTabVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :tab_videos do |t|
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
