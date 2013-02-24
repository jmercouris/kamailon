class AddShortNameToEmailTemplates < ActiveRecord::Migration
  def change
    add_column :email_templates, :short_name, :string
  end
end
