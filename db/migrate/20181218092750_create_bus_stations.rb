class CreateBusStations < ActiveRecord::Migration[5.2]
  def change
    create_table :bus_stations do |t|
      t.string :name 
      t.references :district, forgein_key: true
      
      t.timestamps
    end
  end
end
