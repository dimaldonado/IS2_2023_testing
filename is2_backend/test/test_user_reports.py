import sys, os
import pytest
import json
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../lib/api')))
from dbAPI import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_get_user_reports():
    # Email del usuario que se quiere testear
    user_email = "balliband0@behance.net"

    client = app.test_client()

    # Simular una solicitud GET a la ruta '/user_reports/<email>'
    response = client.get(f'/user_reports/{user_email}')

    # Verificar que la respuesta tiene un código de estado 200 (éxito)
    assert response.status_code == 200

    # Analizar la respuesta JSON
    data = json.loads(response.data)

    # Comparar la respuesta JSON con el resultado esperado
    expected_result = [
    {
        "date": "Tue, 27 Jun 2023 23:06:43 GMT",
        "description": "Pulso la X pero no sucede nada, el programa no cierra",
        "dev_email": "tmycock0@opera.com",
        "dev_id": "32cab0d1b3064ce9ad7bdeeffc8b874b",
        "dev_name": "Tersina",
        "id": 1,
        "software": 1,
        "software_name": "CyberSense",
        "status": "Pending",
        "title": "La \"X\" para salir no funciona",
        "urgency": "1",
        "user_email": "balliband0@behance.net",
        "user_id": "d6fe99285b9b45c8849514ca194dac8e",
        "user_name": "Briana"
    }
    ]

    assert data == expected_result