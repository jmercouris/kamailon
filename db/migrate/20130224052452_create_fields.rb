class CreateFields < ActiveRecord::Migration
  def change
    create_table :fields do |t|
      t.string :name
      t.integer :field_type
      t.string :instructions
      t.string :label_text

      t.timestamps
    end
  end
end
