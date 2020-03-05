class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :tab_videos, :url, :link
  end
end
