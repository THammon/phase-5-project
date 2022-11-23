class RivalriesController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        render json: Rivalry.all, status: :ok
    end

    def show
        render json: find_riv, status: :ok
    end

    private

    def find_riv
        Rivalry.find(params[:id])
    end
end