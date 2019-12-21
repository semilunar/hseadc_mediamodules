class Block < ApplicationRecord
  belongs_to :section
  has_many :phrases 
end
