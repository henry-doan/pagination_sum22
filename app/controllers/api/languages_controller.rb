class Api::LanguagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_language, only: [:show, :update, :destroy]

  def index
    paginate json: current_user.languages
  end

  def show
    render json: @language
  end

  def create
    @language = current_user.languages.new(language_params)
    if @language.save 
      render json: @language
    else
      render json: { errors: @language.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @language.update(language_params)
      render json: @language
    else
      render json: { errors: @language.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @language.destroy
    render json { message: 'Language Deleted' }
  end

  private 
    def set_language
      @language = current_user.languages.find(params[:id])
    end

    def language_params
      params.require(:language).permit(:name)
    end
end
