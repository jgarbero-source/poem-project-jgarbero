class LinesRemove < ActiveRecord::Migration[7.0]
  def change
    remove_column :poems, :lines, :text
  end
end
