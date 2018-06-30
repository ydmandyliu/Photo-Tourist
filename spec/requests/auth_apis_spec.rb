require 'rails_helper'

RSpec.describe "Authentication Api", type: :request do
	include_context "db_cleanup_each", :transaction
	let(:user_props) { FactoryGirl.attributes_for(:user) }

	context "sign-up" do
		context "valid registration" do
			it "successfully creates account" do
				jpost user_registration_path, user_props
				pp parsed_body
				expect(response).to have_http_status(:ok)
			end
		end

		context "invalid registration" do
			context "missing information" do
				it "reports error with messages"
			end

			context "non-unique information" do
				it "reports non-unique email"
			end
		end
	end

	context "anonymous user" do
		it "accesses unprotected"
		it "fails to access protected resource"
	end

	context "login" do
		context "valid user login" do
			it "generates access token"
			it "grants access to resource"
			it "grants access to resource multiple times"
			it "logout"
		end

		context "invalid password" do
		end
	end
  
end
