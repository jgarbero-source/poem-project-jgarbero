class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.boolean :like
      t.references :fav_user, foreign_key: { to_table: "users"}
      t.references :fav_poem, foreign_key: { to_table: "poems"}

      t.timestamps
    end
  end
end
