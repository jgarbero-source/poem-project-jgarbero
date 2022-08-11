class PoemsController < ApplicationController

    def index
        render json: Poem.all
    end

    def show
        poem = find_poem
        render json: poem
    end

    def create
        poem = Poem.create!(poem_params)
        render json: poem, status: :created
    end

    private

    def find_poem
        Poem.find(params[:id])
    end

    def poem_params
        params.permit(:title, :author, :lines, :linecount, :user_id)
    end

end
