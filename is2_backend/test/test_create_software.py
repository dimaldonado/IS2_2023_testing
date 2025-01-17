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


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def generate_unique_software_name():
    return f"test Software {uuid.uuid4().hex}"

def test_create_software(client):
    # Enviar una solicitud POST para crear software
    response = client.post('/software', json={'name': generate_unique_software_name()})
    assert response.status_code == 200

    # Verificar el mensaje de respuesta
    assert response.get_json()['message'] == 'Software creado'
