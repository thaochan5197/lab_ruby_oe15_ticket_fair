class Ticket < ApplicationRecord
  enum status: {cancel: 0, paid: 1, pending: 2}

  belongs_to :seat
  belongs_to :customer
  belongs_to :trip
end
