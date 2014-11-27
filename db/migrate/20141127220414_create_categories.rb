class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.integer :user_id
      t.string :name
      t.text :icon_image
      t.string :icon_color
    end
  end
end
