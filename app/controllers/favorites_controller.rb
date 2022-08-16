class FavoritesController < ApplicationController

    def index
        render json: Favorite.all 
    end

    def create
        # if already_favorited?
        #     render json: {error: "Already favorited!"}
        # else 
        #     # @poem.favorites.create!(fav_user_id: current_user.id)
        #     favorite = Favorite.create!(fav_user_id: current_user.id, fav_poem_id: params[:fav_poem_id])
        #     render json: favorite, status: :created
        # end
        # redirect_to poem_path(@poem)
        favorite = Favorite.create!(fav_params)
        render json: favorite, status: :created
    end

    def destroy
        # if !(already_favorited?)
        #     render json: {error: "Cannot unfavorite" }, status: :not_implemented 
        # else
        #     @favorite.destroy
        # end
        # redirect_to poem_path(@poem)
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

    def already_favorited?
        Favorite.where(fav_user_id: current_user.id, fav_poem_id: params[:fav_poem_id]).exists?
    end

    def fav_params
        params.permit(:like, :fav_user_id, :fav_poem_id)
    end

    def set_flash_message!(key, kind, options = {})
        if is_flashing_format?
        set_flash_message(key, kind, options)
        end
    end
end
