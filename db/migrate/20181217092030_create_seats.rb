class CreateSeats < ActiveRecord::Migration[5.2]
  def change
    create_table :seats do |t|
      t.string :code
      t.integer :type
      t.references :coach, forgein_key: true
      t.float :fare
      
      t.timestamps
    end
  end
end
