class DropTemplatesTable < ActiveRecord::Migration
  def up
    drop_table :templates
  end

  def down
    create_table :templates do |t|
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
