class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  #make the connection between controller action and associated view
  include ActionController::ImplicitRender
end
