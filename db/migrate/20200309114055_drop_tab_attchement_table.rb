class DropTabAttchementTable < ActiveRecord::Migration[6.0]
  # def up
  #   drop_table :tab_attchements
  # end
  #
  # def down
  #   raise ActiveRecord::IrreversibleMigration
  # end
  def change
    drop_table :ab_attchements do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.timestamps null: false
    end
  end
end
