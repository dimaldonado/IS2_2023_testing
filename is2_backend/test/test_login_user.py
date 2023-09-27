
import pytest
import json
from is2_backend.lib.api.dbAPI import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_login(client):

    test_data = {
        "email": "test6@example.com",
        "password": "testpassword",
    }

    response = client.post('/login', json=test_data)


    data = json.loads(response.data)

    assert response.status_code == 200  
    assert data["name"] == "TestUser6"  
    assert data["email"] == "test6@example.com"