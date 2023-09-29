import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../lib/api')))
import pytest
import json
from dbAPI import app

#crear un cliente simulado, para realizar solicitudes HTTP a la app flask
@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_get_user():
    #id del usuario que se quiere testear
    user_id = "c834288d964049eca9af98b61baa6b09"
   
    client = app.test_client()

    # Simular una solicitud GET a la ruta '/users/<id>'
    response = client.get(f'/users/{user_id}')

    # Verificar que la respuesta tiene un código de estado 200 (éxito)
    assert response.status_code == 200

    # Analizar la respuesta JSON
    data = json.loads(response.data)

    # Comparar la respuesta JSON con el resultado esperado
    expected_result = {
        "user": {
            "email": "test1e164da61ebe452a99ddaaa21c0167e0@example.com",
            "id": "c834288d964049eca9af98b61baa6b09",
            "name": "TestUser"
        }
    }
    assert data == expected_result