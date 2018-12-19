class BusStation < ApplicationRecord
  belongs_to :district
  has_many :stop_points, dependent: :destroy
end
