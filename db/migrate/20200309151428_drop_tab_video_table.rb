class DropTabVideoTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :tab_videos do |t|
      t.string :title, null: false
      t.string :link, null: false
      t.timestamps null: false
    end
  end
end
