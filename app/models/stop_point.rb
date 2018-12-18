class StopPoint < ApplicationRecord
  enum type: {start: 0, end: 1}

  belongs_to :trip
  belongs_to :district
end
