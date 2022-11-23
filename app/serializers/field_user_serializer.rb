class FieldUserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name

  def plants
    ActiveModelSerializers::SerializableResource.new(object.fields, each_serializer: FieldSerializer)
  end

end
