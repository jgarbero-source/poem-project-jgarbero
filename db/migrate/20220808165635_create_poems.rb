class CreatePoems < ActiveRecord::Migration[7.0]
  def change
    create_table :poems do |t|
      t.string :title
      t.string :author
      t.text :lines
      t.integer :linecount

      t.timestamps
    end
  end
end
