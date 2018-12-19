class Trip < ApplicationRecord
  belongs_to :coach
  has_many :stop_points, depentdent: :destroy
end
