
import pytest
from lib.api.dbAPI import app

#crear un cliente simulado, para realizar solicitudes HTTP a la app flask
@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_register_user(client):
    #aumentar numero cada vez que se ejecuta
    name_test = "TestUser6"
    email_test = "test6@example.com"
    
    # Simula una solicitud POST para registrar un usuario
    response = client.post('/register', json={
        "name": name_test,
        "email": email_test,
        "password": "testpassword"
    })

    assert response.status_code == 200  # Verifica que la respuesta sea exitosa

    # Intenta convertir la respuesta en un diccionario
    try:
        data = response.get_json()
    except ValueError:
        # Si la conversión falla, significa que no es JSON válido
        assert False, "La respuesta no es un JSON válido"

    # Verifica que la respuesta contenga los datos esperados
    assert data[0]["name"] == name_test
    assert data[0]["email"] == email_test
    assert data[1] == 200