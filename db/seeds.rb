
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'guardians.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  g = Guardian.new
  Guardian.create!(
    name: row['name'],
    g_class: row['class'],
    race: row['race'],
    job: row['job'],
    union_a: row['50_union'],
    union_b: row['100_union'],
    artwork: "#{row['name']}.jpg"
  )
end
