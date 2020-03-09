class DropTabAttchementTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :tab_attchements do |t|
      t.string :title, null: false
      # t.string :url, null: false
      t.timestamps null: false
    end
  end
end
