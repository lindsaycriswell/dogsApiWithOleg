class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :breed
      t.string :name
      t.string :image_url
      t.string :description

      t.timestamps
    end
  end
end
