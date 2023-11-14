import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../lib/api')))
import pytest
import json
from dbAPI import app
import uuid

#crear un cliente simulado, para realizar solicitudes HTTP a la app flask
@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def generate_unique_id():
    return f"{uuid.uuid4().hex}"


def test_create_report(client):
    # Datos del reporte que se quiere testear
    random_id = generate_unique_id()
    report_data = {
        "title": "Test Report " + random_id,
        "description": "This is a test report.",
        "user_id": random_id,
        "user_name": "Test_User_"+random_id,
        "user_email": "test"+random_id+"@example.com",
        "dev_id": "dev"+random_id,
        "dev_name": "Test Developer",
        "dev_email": "dev"+random_id+"@example.com",
        "software": 1,
        "software_name": "Test Software",
        "urgency": "1",
        "status": "ToDo"
    }
    # Simular una solicitud POST a la ruta '/reports'
    response = client.post('/reports', json=report_data)

    # Verificar que la respuesta tiene un código de estado 200 (éxito)
    assert response.status_code == 200