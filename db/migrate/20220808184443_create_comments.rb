class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.references :commented_poem, foreign_key: { to_table: "poems" }
      t.references :commenter, foreign_key: { to_table: "users"}

      t.timestamps
    end
  end
end
