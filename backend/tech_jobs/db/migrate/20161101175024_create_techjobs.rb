class CreateTechjobs < ActiveRecord::Migration[5.0]
  def change
    create_table :techjobs do |t|

      t.timestamps
    end
  end
end
