class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.references :author, index: true, foreign_key: true
      t.string :body

      t.timestamps null: false
    end
  end
end
