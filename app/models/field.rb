class Field < ActiveRecord::Base
  attr_accessible :instructions, :label_text, :name, :field_type, :email_template_id
  belongs_to :template
end
