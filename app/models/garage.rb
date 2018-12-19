class Garage < ApplicationRecord
  belongs_to :user
  has_many :coaches, dependent: :destroy
end
