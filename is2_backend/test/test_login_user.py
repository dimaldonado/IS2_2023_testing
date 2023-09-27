
import pytest
import json
from ..lib.api.dbAPI  import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_login(client):

    test_data = {
        "email": "test@example.com",
        "password": "password123",
    }

    response = client.post('/login', json=test_data)


    data = json.loads(response.data)

    assert response.status_code == 200  
    assert data["name"] == "Test User"  
    assert data["email"] == "test@example.com"