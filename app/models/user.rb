class User < ActiveRecord::Base
  attr_accessible :address_line1, :adress_line2, :city, :email, :first_name, :last_name, :state, :telephone, :zipcode
end
