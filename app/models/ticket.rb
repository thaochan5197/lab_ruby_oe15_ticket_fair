class Ticket < ApplicationRecord
  enum status: {unpaid: 0, paid: 1}
  
  has_one :seat
  belongs_to :customer
end
