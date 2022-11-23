class FieldSerializer < ActiveModel::Serializer
  attributes :id, :field_name, :team_name, :field_image, :team_image
  has_one :user
  has_one :conference
  has_one :rivalry
end
