class CreateStopPoints < ActiveRecord::Migration[5.2]
  def change
    create_table :stop_points do |t|
      t.time :time_stop
      t.integer :type
      t.references :trip, foreign_key: true
      t.integer :bus_station_id

      t.timestamps
    end
  end
end
