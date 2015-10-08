class DropTimestampsFromMessages < ActiveRecord::Migration
  def change
    remove_column :messages, :created_at
    remove_column :messages, :updated_at
  end
end
