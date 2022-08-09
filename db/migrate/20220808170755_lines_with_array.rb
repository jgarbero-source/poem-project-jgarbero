class LinesWithArray < ActiveRecord::Migration[7.0]
  def change
    add_column :poems, :lines, :text, array: true, default: []
  end
end
