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

def test_get_software_dev_names():
    client = app.test_client()

    # Simular una solicitud GET
    response = client.get('/software_dev_names')

    # Verificar que la respuesta tiene un código de estado 200 (éxito)
    assert response.status_code == 200

    # Analizar la respuesta JSON
    data = json.loads(response.data)

    # Comparar la respuesta JSON con el resultado esperado
    expected_result = {
        "software_dev": [
            {
                "developer_name": "Tersina",
                "software_name": "CyberSense"
            },
            {
                "developer_name": "Alvin",
                "software_name": "CyberSense"
            },
            {
                "developer_name": "Arden",
                "software_name": "CyberSense"
            },
            {
                "developer_name": "Zelma",
                "software_name": "DataFlow Pro"
            },
            {
                "developer_name": "Joann",
                "software_name": "InnovaTech"
            },
            {
                "developer_name": "Brande",
                "software_name": "CodeForge"
            },
            {
                "developer_name": "Kim",
                "software_name": "TechWave"
            },
            {
                "developer_name": "Walton",
                "software_name": "DataFlow Pro"
            },
            {
                "developer_name": "Sherye",
                "software_name": "CodeForge"
            },
            {
                "developer_name": "Francene",
                "software_name": "CodeForge"
            }
        ]
    }
    assert data == expected_result