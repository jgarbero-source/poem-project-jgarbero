class PoemsController < ApplicationController

    def index
        render json: Poem.all
    end
end
