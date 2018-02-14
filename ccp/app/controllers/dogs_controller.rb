class DogsController < ApplicationController
  def index
    @dogs = Dog.all
    render json: @dogs
  end

  def create
    @dog = Dog.new(dog_params)
    if @dog.save
      render json: @dog
    else
      render json: {errors: @dog.errors.full_messages}, status: 422
    end
  end

  def update
    @dog = Dog.find(params[:id])

    @dog.update(dog_params)
    if @dog.save
      render json: @dog
    else
      render json: {errors: @dog.errors.full_messages}, status: 422
    end
  end

  def destroy
    @dog = Dog.find(params[:id])
    @dog.destroy

    render json: @dog
  end

  def show
    render json: @dog, status: 200
  end


  private
  def dog_params
    params.permit(:breed, :name, :image_url, :description)
  end
end
