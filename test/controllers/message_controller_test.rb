require 'test_helper'

class MessageControllerTest < ActionController::TestCase
  test "should get broadcast" do
    get :broadcast
    assert_response :success
  end

end
