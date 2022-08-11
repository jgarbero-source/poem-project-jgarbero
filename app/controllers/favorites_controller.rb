class FavoritesController < ApplicationController

    private

    def fav_params
        params.permit(:like, :fav_user_id, :fav_poem_id)
    end
end
