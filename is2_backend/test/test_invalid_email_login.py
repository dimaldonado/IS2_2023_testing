
import pytest
from is2_backend.lib.api.dbAPI import appp

#crear un cliente simulado, para realizar solicitudes HTTP a la app flask
@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_invalid_email_login(client):
    # se define un email no existente para testear el mensaje de error
    test_data = {
        "email": "nonexistent@example.com",
        "password": "password123",
    }

    # Send a POST request to the /login route
    response = client.post('/login', json=test_data)

    # Assertions for an invalid email
    assert response.status_code == 401
    data = json.loads(response.data)
    assert "error" in data
    assert data["error"] == "Correo o contraseña incorrectas"
