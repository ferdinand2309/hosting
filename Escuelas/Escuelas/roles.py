from rolepermissions.roles import AbstractUserRole

class Fernando(AbstractUserRole):
    available_permissions = {
        'create_medical_record': True,
}
