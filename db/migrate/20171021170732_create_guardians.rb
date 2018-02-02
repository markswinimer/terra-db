class CreateGuardians < ActiveRecord::Migration[5.1]
  def change
    create_table :guardians do |t|
      t.string :name, null: false
      t.string :g_class, null: false
      t.string :race, null: false
      t.string :job, null: false
      t.string :union_a, null: false
      t.string :union_b, null: false
      t.string :artwork, null: false

      t.timestamps
    end
  end
end
