module GaragesHelper
  def check_seat seat
    ticket = seat.tickets.find_by trip_id: trip.id
    if ticket.nil? || ticket.status_cancel?
      "available"
    else 
      "unavailable"
    end
  end

  def list_start_point trip
    trip.stop_points.collect { |p| [ p.bus_station.name ] }
  end
end
