
import pytest
from ..lib.api.dbAPI import app

#crear un cliente simulado, para realizar solicitudes HTTP a la app flask
@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_register_user(client):
    # Simula una solicitud POST para registrar un usuario
    response = client.post('/register', json={
        "name": "TestUser",
        "email": "test@example.com",
        "password": "testpassword"
    })

    assert response.status_code == 200  # Verifica que la respuesta sea exitosa

    # Verifica que la respuesta contenga los datos esperados
    data = response.get_json()
    assert data["name"] == "TestUser"
    assert data["email"] == "test@example.com"