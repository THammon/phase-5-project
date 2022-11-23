class FieldsController < ApplicationController
    def index
        render json: Field.all, status: :ok
    end

    def show
        render json: find_fie, status: :ok
    end

    private

    def find_fie
        Field.find(params[:id])
    end
end
