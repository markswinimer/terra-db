class Api::V1::GuardiansController < ApplicationController

  def index
    render json: Guardian.all
  end
end
