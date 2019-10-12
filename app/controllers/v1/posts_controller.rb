class V1::PostsController < ApplicationController
  def create
    post = Post.new(post_params)

    if post.save
      render json: success_json(post), status: :created
    else
      render json: error_json(post), status: :unprocessable_entity
    end
  end

  def index
    posts = Post.all

    render json: posts
  end

  private

  def post_params
    params.permit(:content, images: [])
    results = {}
    results[:content] = params[:content]
    results[:images] = params[:images].values
    results
  end

  def success_json(post)
    {
      post: {
        id: post.id,
        content: post.content,
      }
    }
  end

  def error_json(post)
    { errors: post.errors.full_messages }
  end
end
