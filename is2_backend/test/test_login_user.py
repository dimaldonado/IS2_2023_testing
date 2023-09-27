
import sys, os
import pytest
import json
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../lib/api')))
from dbAPI import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_login(client):

    test_data = {
        "email": "testec2fc5bcd3304d758fa2a3e558b7074c@example.com",
        "password": "testpassword",
    }

    response = client.post('/login', json=test_data)


    data = json.loads(response.data)

    assert response.status_code == 200  
    assert data["name"] == "TestUser"  
    assert data["email"] == "testec2fc5bcd3304d758fa2a3e558b7074c@example.com"