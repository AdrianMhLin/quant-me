class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :category_id
      t.integer :times
      t.string :unit
      t.timestamps :created_at
    end
  end
end
