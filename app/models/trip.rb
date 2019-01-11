class Trip < ApplicationRecord
  belongs_to :coach
  has_many :stop_points, dependent: :destroy
  has_many :tickets, dependent: :destroy

  before_save :dowcase_atributes

  self.skip_time_zone_conversion_for_attributes = [:time_start, :time_finish]

  scope :search_trip, (lambda do |city_start, city_end, date|
    joins("LEFT JOIN coaches ON trips.coach_id = coaches.id")
    .where("trips.city_start = '#{city_start}' and trips.city_finish =
      '#{city_end}' and trips.time_start between ? and ?",
      date.to_date.beginning_of_day.strftime("%Y-%m-%d %H:%M:%S"),
      date.to_date.end_of_day.strftime("%Y-%m-%d %H:%M:%S"))
  end)

  private

  def dowcase_atributes
    %w(city_start city_finish).map do |p|
      (send p.to_s).downcase!
    end
  end
end
