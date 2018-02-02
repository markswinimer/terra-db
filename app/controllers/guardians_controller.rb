class GuardiansController < ApplicationController
  
  def index
    @guardians = Guardian.all
  end

end
