class SearchController < ApplicationController

  def index
    params[:term]
  end

  def query
    @results = []
    @results = Tmdb::Person.find(params[:term]) if params[:term].present?
    render json: { results: @results }
  end

  def similarities
    if params[:selections].present?
      @movies1 = Tmdb::Person.movie_credits(params[:selections].first[:id])["cast"]
      @movies2_ids = Tmdb::Person.movie_credits(params[:selections].last[:id])["cast"].map{|m| m["id"] }

      @results = @movies1.select{|m| @movies2_ids.include?(m["id"]) }

      render json: { results: @results }
    else
      render json: { message: "Bad request" }, status: :unprocessable_entity
    end
  end

end