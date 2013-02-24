class EditorController < ApplicationController
  def editor
    @fields = EmailTemplate.find(1).fields.all
    @template_short_name = EmailTemplate.find(1).short_name
  end
end
