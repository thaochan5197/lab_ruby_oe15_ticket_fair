class Seat < ApplicationRecord
  belongs_to :coach
  belongs_to :ticket
end
