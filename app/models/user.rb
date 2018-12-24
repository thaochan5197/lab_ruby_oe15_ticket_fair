class User < ApplicationRecord
  belongs_to :garages

  has_secure_password
end
