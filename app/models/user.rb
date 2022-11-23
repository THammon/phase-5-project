class User < ApplicationRecord
    has_many :fields
    has_many :conferences, through: :fields
    has_many :rivalries, through: :fields
end
