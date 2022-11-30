class FieldSerializer < ActiveModel::Serializer
  attributes :id, :field_name, :team_name, :visit, :team_image, :field_image
  has_one :user, serializer: FieldUserSerializer
  has_one :conference
  has_one :rivalry
end
