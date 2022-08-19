class FavoritesController < ApplicationController

    def index
        render json: Favorite.all 
    end

    def create
        favorite = Favorite.create(fav_params)
        if favorite.valid?
            render json: favorite, status: :created
        else
            render json: { error: "You cannot favorite a poem twice." }, status: :unprocessable_entity
        end
    end

    def destroy
        favorite = find_favorite
        favorite.destroy
        head :no_content, status: :ok
    end

    private

    def find_poem
        @poem = Poem.find_by(id: params[:id])
    end

    def find_favorite
        Favorite.find(params[:id])
    end

    def fav_params
        params.permit(:like, :fav_user_id, :fav_poem_id)
    end
end
