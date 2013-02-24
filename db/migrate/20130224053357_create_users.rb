class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :address_line1
      t.string :adress_line2
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :telephone

      t.timestamps
    end
  end
end
