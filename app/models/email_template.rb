class EmailTemplate < ActiveRecord::Base
  attr_accessible :description, :name, :short_name
  has_and_belongs_to_many :categories
  has_many :fields
  
end
